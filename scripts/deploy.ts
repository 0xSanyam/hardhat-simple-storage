// "run" is used to run any task (e.g. verify)
import { ethers, run, network } from "hardhat";

async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying...");
    const contract = await SimpleStorageFactory.deploy();
    await contract.deployed();
    console.log(`Deployed contract to: ${contract.address}`);

    if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY!) {
        console.log("Waiting for block confirmations...");
        await contract.deployTransaction.wait(5);
        await verify(contract.address, []);
    }

    const currentFavNumber = await contract.retrieve();
    console.log(`Current Favorite Number is: ${currentFavNumber}`);

    const transactionResponse = await contract.store(7);
    await transactionResponse.wait(1);
    const newFavNumber = await contract.retrieve();
    console.log(`Updated Favorite Number is: ${newFavNumber}`);
}

const verify = async (contractAddress: string, args: any[]) => {
    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (err: any) {
        if (err.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!");
        } else {
            console.log(err);
        }
    }
};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

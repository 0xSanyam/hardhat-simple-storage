require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");

/** @type import('hardhat/config').HardhatUserConfig */

const RPC_URL = process.env.RINKEBY_RPC_URL;
const PRIVATE = process.env.PRIVATE_KEY;
const API_KEY = process.env.ETHERSCAN_API_KEY;
const CURR_API = process.env.COINMARKETCAP_API_KEY;

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            chainId: 4,
            url: RPC_URL,
            accounts: [PRIVATE],
        },
        localhost: {
            chainId: 31337,
            url: "http://127.0.0.1:8545/",
            // accounts: already taken care of
        },
    },
    etherscan: {
        apiKey: API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "INR",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: CURR_API,
    },
    solidity: "0.8.7",
};

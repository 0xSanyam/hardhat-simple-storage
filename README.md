# Hardhat Simple Storage

This is a simple smart contract made by using hardhat, which allows users to store a number and retrieve it. The users are mapped to the numbers respectively.

## Quickstart

```
git clone https://github.com/0xSanyam/hardhat-simple-storage
```

### Typescript

Typescript is also included in scripts, tasks and test section.

## Usage

### Deploy:

```
yarn hardhat run scripts/deploy.js
```

![Deploy JS](/assets/Deploy%20JS.png)

```
yarn hardhat run scripts/deploy.ts
```

![Deploy TS](/assets/Deploy%20TS.png)

### Testing

```
yarn hardhat test
```

![Test TS JS](/assets/Test%20TS%20JS.png)

#### Test Coverage

```
yarn hardhat coverage
```

![Coverage](/assets/Coverage.png)

### Estimate gas

You can estimate how much gas things cost by running:

```
yarn hardhat test
```

You'll see an output file called `gas-report.txt`

### Local Deployment 

If you'd like to run your own local hardhat network, you can run:

```
yarn hardhat node
```

![Hardhat Node](/assets/Hardhat%20node.png)

And then **in a different terminal**

```
yarn hardhat run scripts/deploy.js --network localhost
```

![Deploy Localhost](/assets/Deploy%20Localhost.png)

And you should see transactions happen in your terminal that is running `yarn hardhat node`

![Node Log](/assets/Node%20log.png)

**Important localhost note**

>If you use metamask with a local network, everytime you shut down your node, you'll need to reset your account. Settings -> Advanced -> Reset account. Don't do this with a metamask you have real funds in. And maybe don't do this if you're a little confused by this. 

### Deployment to a testnet or mainnet

1. Setup environment variables
  
    You'll want to set your `RINKEBY_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to the `.env` file.

    - `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)).
      - You can [learn how to export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
    - `RINKEBY_RPC_URL`: This is url of the rinkeby testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/)

2. Get testnet ETH

    Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH. You should see the ETH show up in your metamask.

3. Deploy

    ```
    yarn hardhat run scripts/deploy.js --network rinkeby
    ```

    ![Deploy JS Testnet](/assets/Deploy%20JS%20Testnet.png)

    ```
    yarn hardhat run scripts/deploy.ts --network rinkeby
    ```

    ![Deploy TS Testnet](/assets/Deploy%20TS%20Testnet.png)

### Verify on etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/myapikey) from Etherscan and set it as an environment variable named `ETHERSCAN_API_KEY`. You can put it into your `.env` file.

In it's current state, if you have your api key set, it will auto verify rinkeby contracts!
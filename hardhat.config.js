require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

module.exports = {
  solidity: "0.8.4",
  networks: {
    apothem: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    devnet: {
      url: process.env.devnet_RPC_URL,
      gasPrice: "auto",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
  },        
  xdc: {
      url: process.env.xdc_RPC_URL,
      gasPrice: "auto",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
  },
  mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      gasPrice: "auto",
      accounts: process.env.PRIVATE_KEY_POLYGON !== undefined ? [process.env.PRIVATE_KEY_POLYGON] : [],
  },
    mocha: {
        allowUncaught: true,
        fullTrace: true,
        diff: true,
        timeout: "60000s",
    },
    paths: {
        sources: "src",
    },
    typechain: {
        outDir: "src/types",
        target: "ethers-v5",
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    apothem: "abc",
    devnet: "abc",
    xdc: "abc",
  },
  customChains: [
    {
        network: "apothem",
        chainId: 51,
        urls: {
            apiURL: "https://abapi.blocksscan.io/api",
            browserURL: "https://apothembeta.blocksscan.io/",
        },
    },
    {
        network: "devnet",
        chainId: 551,
        urls: {
            apiURL: "https://devnetapi.blocksscan.io/api",
            browserURL: "https://devnet.blocksscan.io/",
        },
    },
    {
        network: "xdc",
        chainId: 50,
        urls: {
            apiURL: "https://bapi.blocksscan.io/api",
            browserURL: "https://beta.blocksscan.io/",
        },
    },
],
};
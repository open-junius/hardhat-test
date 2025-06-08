import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import { config as dotConfig } from "dotenv";
dotConfig()

if (!process.env.PRIVATE_KEY) {
  throw new Error("Please set your PRIVATE_KEY in a .env file");
}

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    localnet: {
      accounts: [process.env.PRIVATE_KEY,],
      url: '127.0.0.1:9944'
    },
    devnet: {
      accounts: [process.env.PRIVATE_KEY,],
      url: 'wss://test.finney.opentensor.ai:443'
    },
    testnet: {
      accounts: [process.env.PRIVATE_KEY,],
      url: 'wss://test.finney.opentensor.ai:443'
    }
  }
};

export default config;

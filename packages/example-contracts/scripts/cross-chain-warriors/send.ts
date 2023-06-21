import { ethers, network } from "hardhat";

import { getCrossChainWarriors } from "../../lib/cross-chain-warriors/CrossChainWarriors.helpers";
import { getAddress } from "../../lib/shared/address.helpers";
import { isNetworkName, networkVariables } from "../../lib/shared/network.constants";

async function main() {
    if (!isNetworkName(network.name)) throw new Error("Invalid network name");
  
    const _networkVariables = networkVariables[network.name];
  
    const crossChainWarriorsAddress = getAddress("crossChainNft");
  
    const crossChainWarriorsContract = await getCrossChainWarriors(crossChainWarriorsAddress);
  
    if (_networkVariables.crossChainName === "") throw new Error("Invalid crossChainName");
    
    const [deployer] = await ethers.getSigners();

    console.log("Sending...");
    
    (await crossChainWarriorsContract.crossChainTransfer( _networkVariables.crossChainId, deployer.address, 3)).wait()
    
    console.log(`Done!`)
  }
  
  main().catch(error => {
    console.error(error);
    process.exit(1);
  });
  
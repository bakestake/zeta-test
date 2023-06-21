import { isNetworkName } from "../../../addresses/src";
import { saveAddress } from "@zetachain/addresses-tools";
import { ethers, network } from "hardhat";

import { getCrossChainWarriors } from "../../lib/cross-chain-warriors/CrossChainWarriors.helpers";
import { getAddress } from "../../lib/shared/address.helpers";



async function main() {
    if (!isNetworkName(network.name)) throw new Error("Invalid network name"); 
  
    const crossChainWarriorsContractAddress = getAddress("crossChainNft");
    
    const crossChainWarriorsContract = await getCrossChainWarriors(crossChainWarriorsContractAddress);
  
    const [deployer] = await ethers.getSigners();
  
    console.log("Minting");
    (await crossChainWarriorsContract.mint(deployer.address)).wait();
  
    console.log(`Contract Address:`, crossChainWarriorsContractAddress);
  }

main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
import { isNetworkName } from "../../../addresses/src";
import { saveAddress } from "@zetachain/addresses-tools"
import { ethers, network } from "hardhat";

import { getCrossChainWarriors } from "../../lib/cross-chain-warriors/CrossChainWarriors.helpers";

async function main() {
  if (!isNetworkName(network.name)) throw new Error("Invalid network name");

  const crossChainWarriorsContract = await getCrossChainWarriors();

  console.log("Setting base URI");
  if (network.name == "goerli")
  (
    await crossChainWarriorsContract.setBaseURI(
      "ipfs://QmZr2AE1Rgxd9sQB7DWucKanSVZRjwFooBzM6grHb3GuJw/"
    )
  ).wait();
  else
  (
    await crossChainWarriorsContract.setBaseURI(
      "https://ipfs.io/ipfs/QmZr2AE1Rgxd9sQB7DWucKanSVZRjwFooBzM6grHb3GuJw/"
    )
  ).wait()

  const [deployer] = await ethers.getSigners();

  console.log("Minting");
  await crossChainWarriorsContract.mint(deployer.address);

  saveAddress("crossChainNft", crossChainWarriorsContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

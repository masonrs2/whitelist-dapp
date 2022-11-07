const { ethers } = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(10);
  await deployedWhitelistContract.deployed();

  // Contract address: 0x8F491Ff72b47CA3063b10C0A13b3417466101729
  console.log("Whitelist contract address: ", deployedWhitelistContract.address)
}

main() 
  .then(() => process.exit(0)) 
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
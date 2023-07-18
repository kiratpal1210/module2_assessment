const { ethers } = require("hardhat");

async function main() {
  // Get the ContractFactory and Signer accounts
  const ContractFactory = await ethers.getContractFactory("kiratpal_contract");
  const [deployer] = await ethers.getSigners();

  // Deploy the contract
  console.log("Deploying kiratpal_contract...");
  const contract = await ContractFactory.deploy();

  // Wait for the contract to be mined
  await contract.waitForDeployment();

  console.log("kiratpal_contract deployed to:", contract.target);
}

// Run the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

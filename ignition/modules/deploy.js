//Soulbound NFT deployed to: 0x2a3a92402cc0F74816129EAE2ea3b0F19c66A367

require('dotenv').config(); // Load environment variables from .env file
const { ethers } = require("hardhat"); // Import ethers from Hardhat

async function main() {
    // Get the contract factory for the SoulboundNFT contract
    const SoulboundNFT = await ethers.getContractFactory("AspisEAcc");
    // Get the signers from Hardhat
    const signers = await ethers.getSigners(); // Update this line
    const signer = signers[0]; // Use the first signer
    
    // Deploy the contract
    const soulboundNFT = await SoulboundNFT.deploy(signer.address);
    
    // Wait for the contract to be deployed
    //await soulboundNFT.deployed();
    await soulboundNFT.waitForDeployment();
    
    // Log the deployed contract address
    console.log("Soulbound NFT deployed to:", await soulboundNFT.getAddress());
}

// Execute the main function and handle errors
main()
    .then(() => process.exit(0)) // Exit process if successful
    .catch((error) => {
        console.error(error); // Log any errors
        process.exit(1); // Exit with failure
    });
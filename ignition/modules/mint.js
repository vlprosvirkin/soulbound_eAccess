//Soulbound NFT deployed to: 0x2a3a92402cc0F74816129EAE2ea3b0F19c66A367
//tokenURI = https://aqua-magnificent-camel-41.mypinata.cloud/ipfs/QmWG8w763cix2CfwSP4nkEHJPgjYAhA4v6fUtvrKhxeBy9
//0x097046DF3E3d5960AF693B2fCCC32Cd01D25B780

require('dotenv').config(); // Load environment variables from .env file
const dotenv = require('dotenv');
const { ethers } = require("hardhat"); // Import ethers from Hardhat

dotenv.config();

async function main() {
    // Get the contract factory for the SoulboundNFT contract
    const deployedAddress = "0x2a3a92402cc0F74816129EAE2ea3b0F19c66A367"; // Replace this with the actual deployed contract address
    const soulboundNFT = await ethers.getContractAt("AspisEAcc", deployedAddress);

    const tokenURI = "https://aqua-magnificent-camel-41.mypinata.cloud/ipfs/QmWG8w763cix2CfwSP4nkEHJPgjYAhA4v6fUtvrKhxeBy9"
    //const recipientAddress = process.env.deployerAddress;
    const recipientAddress = "0x097046DF3E3d5960AF693B2fCCC32Cd01D25B780"
    
    // Call the mint function
    const tx = await soulboundNFT.safeMint(recipientAddress, tokenURI);
    console.log("Transaction hash of safeMint:", tx.hash);
}

// Execute the main function and handle errors
main()
    .then(() => process.exit(0)) // Exit process if successful
    .catch((error) => {
        console.error(error); // Log any errors
        process.exit(1); // Exit with failure
    });
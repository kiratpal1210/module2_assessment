# kiratpal_contract DApp

This project is a decentralized application (DApp) that interacts with the kiratpal_contract smart contract. The DApp allows you to view the owner's name and balance, as well as transfer ethers to the contract owner.

## Description

The kiratpal_contract DApp is built using Hardhat and React. It consists of a smart contract written in Solidity and a React frontend that provides a user-friendly interface to interact with the contract. The smart contract handles the logic for retrieving the owner's name and balance, as well as transferring ethers to the owner. The React frontend displays the owner's information and provides a form to initiate a transfer.

## Getting Started

### Installing

To download the project, you can clone the repository using the following command:

```
git clone https://github.com/kiratpal1210/module2_assessment
```

After cloning the repository, navigate to the project's root directory.

### Executing program

To run the DApp, follow these steps:

1. Install the project dependencies by running the following command:

   ```
   npm install
   ```
2. Start a blockchain locally by running the command: 
   ```
   npx hardhat node
   ```

3. Deploy the kiratpal_contract smart contract by running the deployment script:

   ```
   npx hardhat run scripts/deploy.js --network localhost
   ```
4. Go to frontend directory by running the command:

   ```
   cd ./frontend
   ```
5. Install the project dependencies by running the following command:

   ```
   npm install
   ```
6. Start the React development server:

   ```
   npm start
   ```

   The DApp will be accessible in your web browser at `http://localhost:3000`.

## Help

If you encounter any issues or have any questions, you can refer to the project's documentation or seek help from the project contributors.

## Authors

- [Kiratpal Singh Kalsey](https://www.linkedin.com/in/kiratpal-singh-kalsey-a92b15230/)

## License

This code is released under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

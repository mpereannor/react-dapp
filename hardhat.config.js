require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: { 
      chainId: 1337
    },
    ropsten: { 
      url: "https://ropsten.infura.io/v3/171284d251ae4980b38b9f75260d7fcc",
      accounts: [`0xdcde57dd5eb886e308c915089d04eb5417924e3e8a9602279bb1e0c1eda65e62`]
    }
  }
};


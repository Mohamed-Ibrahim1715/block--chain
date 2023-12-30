var Election = artifacts.require("./Election.sol");

module.exports = function(deployer) {
  deployer.deploy(Election);

  const YourContractName = artifacts.require("Election");

  module.exports = function(Election) {
   deployer.deploy(Election);
  };
};
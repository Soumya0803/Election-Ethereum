var Election = artifacts.require("./Election.sol"); //represents contract abstraction secific to truffle
//gives election artifact that represents our smart contract and truffle will expose t so that we can interact with it

module.exports = function(deployer) {
  deployer.deploy(Election);
};

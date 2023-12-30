const Election = artifacts.require("Election");

module.exports = async function(callback) {
 let instance = await Election.deployed();
 // Now you can interact with the instance
 // For example, if your contract has a method called `vote`, you could call it like this:
 // await instance.vote(/* parameters here */);
 callback();
}

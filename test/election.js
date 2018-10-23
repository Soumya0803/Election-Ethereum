var Election = artifacts.require("./Election.sol");//abstraction to interact with contract
contract("Election",function(accounts){ //declare our contract,this injects all accounts that exist in our deleloment environment

//test initialized with correct no. of candidates
   it("Initializes with two candidates", function(){   //provided by mocha testing truffleframework
          return Election.deployed().then(function(instance){
       return instance.candidatesCount();
     }).then(function(count){
       assert.equal(count, 2); //assert provided by chai
     });
   });
});

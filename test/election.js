var Election = artifacts.require("./Election.sol");//abstraction to interact with contract
contract("Election",function(accounts){ //declare our contract,this injects all accounts that exist in our deleloment environment
  
    var electionInstance;// to save instance, so that it has scope inside this entire test

//test initialized with correct no. of candidates
   it("Initializes with two candidates", function(){   //provided by mocha testing truffleframework
          return Election.deployed().then(function(instance){ // asynchronous call, promise chain
       return instance.candidatesCount();
     }).then(function(count){
       assert.equal(count, 2); //assert provided by chai
     });
   });
   it("it initializes the candidates with the correct values", function() {
  return Election.deployed().then(function(instance) {// gives copy of deployed contract
    electionInstance = instance;
    return electionInstance.candidates(1); // call candidates function which was in election.sol 
  }).then(function(candidate) {
    assert.equal(candidate[0], 1, "contains the correct id");
    assert.equal(candidate[1], "Candidate 1", "contains the correct name");
    assert.equal(candidate[2], 0, "contains the correct votes count");
    return electionInstance.candidates(2);
  }).then(function(candidate) {
    assert.equal(candidate[0], 2, "contains the correct id");
    assert.equal(candidate[1], "Candidate 2", "contains the correct name");
    assert.equal(candidate[2], 0, "contains the correct votes count");
  });
});
});


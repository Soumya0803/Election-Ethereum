pragma solidity ^0.4.11;

contract Election{
 //string public candidate;//declariing it public provides getter automatically in solidity
  //Model a candidate
  struct Candidate{
    uint id;
    string name;
    uint voteCount;
  }

  // store candidates
  mapping(uint => Candidate) public candidates; //when new candidate is added to this mapping state of our smart contract is changed and written to blockchain
// no way to determine the size f the mapping

// store candidate Count
 uint public candidatesCount; //default value 0
function Election() public   //constructor
  {
//  candidate = "Canditate 1";
   addCandidate("Candidate 1");
   addCandidate("Candidate 2");

  }
function addCandidate (string _name) private{
   candidatesCount++;
   candidates[candidatesCount]= Candidate(candidatesCount,_name,0);
 }
}

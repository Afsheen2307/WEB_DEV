let names=["tony","bruce","peter","steve","abc","xyz","pqrs"];
// let winner=names[0];
// let runnerup=names[1];
// let secondRunnerup=names[2];

//Destructing

// let [winner,runnerup,secondRunnerup]=names;
// console.log(winner);
// console.log(secondRunnerup);

//using rest
let [winner,runnerup,secondRunnerup,...others]=names;
console.log(...others);
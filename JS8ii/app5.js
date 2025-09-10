let arr=[1, 2, 3, 4, 5];
let newArr=[...arr];
console.log(newArr);
newArr.push(6);
console.log(newArr);
console.log(arr);

let chars=[ ..."hello"];


let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let nums=[...odd,...even];
console.log(nums);

//object literals

const data={
    email:"ironman@gmail.com",
    password:"Abcd"
};
console.log(data);
const dataCopy={...data,id:123,country:"India"};
console.log(dataCopy);


//we use array in terms of literals
let arr1=[1,2,3,4,5];//we want to convert all the items into object items
// index becomes key and element are value
let obj1={...arr};//obj-(key,val)
console.log(obj1);

let obj2={..."hello"};
console.log(obj2);



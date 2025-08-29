const g=9.8;
console.log(g);
//g=10;       Uncaught TypeError: Assignment to constant variable.
// console.log(g);

const arr=[1,2,3];
console.log(arr);
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);

//we can add or remove elements from const array but we cannot change the address or we cannot assign some other values's address or reference to the array value.
// let cars=[8,4,'s'];
// arr=cars;
// console.log(arr); //TypeError: Assignment to constant variable.

console.log("Nested Array");

let nums=[[2,4],[3,6],[4,8]];
console.log(nums);
console.log(nums.length);
console.log(nums[0].length);
console.log(nums[1][1]);

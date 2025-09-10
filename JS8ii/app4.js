console.log(Math);
console.log(Math.min);
console.log(Math.min(1,2,3));
let arr=[1,2,4,2,1,4,0,1,2,3,2,1,1,2,3,0];
console.log(Math.min(arr[0],arr[1],arr[2],arr[3]));
//We dont need to pass on each individual to Math.min , we can simply use spread
console.log(Math.min(...arr));
arr.push(-1);
console.log(Math.min(...arr));
console.log(Math.max(...arr));
console.log(...arr);
console.log(..."apnacollege");
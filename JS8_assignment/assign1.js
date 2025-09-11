let arr=[1,2,3,4,5];
const sqr =arr.map((ele)=>ele*ele);
console.log(sqr);
let sum=sqr.reduce((acc,cur)=>acc+cur,0);
console.log(sum);
let avg=sum/arr.length;
console.log(avg);
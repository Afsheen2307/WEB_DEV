let arr=['a','b','c'];
let arrCopy=arr;
console.log(arrCopy==arr);
arrCopy.push('d');
console.log(arr);
arr.pop();
console.log(arr);
console.log(arrCopy);
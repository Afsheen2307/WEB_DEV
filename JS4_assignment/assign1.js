let arr=[1, 2, 3, 4, 5, 6, 2, 3];
let num=prompt("Enter number you want to delete");
// let index=arr.indexOf(num);
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);
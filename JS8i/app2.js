let arr=[23,5,1,66,9,5,0];
// let max=-1;
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }
// console.log(max);


let max=arr.reduce((max,ele)=>{
    if(max<ele){
        return ele;
    }else{
        return max;
    }
});
console.log(max);
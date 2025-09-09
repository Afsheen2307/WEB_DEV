let arr=[2,5,1,6,7,9];
function getMin(arr){
    let min=arr.reduce((min,ele)=>{
        if(min<ele){
            return min;
        }else{
            return ele;
        }
    });
    return min;
}

console.log(getMin(arr));
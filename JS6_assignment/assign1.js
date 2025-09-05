let num= 9;
let arr=[2,4,1,6,7,9,87];
function getElements(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }else{
            console.log("No larger element present in the array");
        }
    }
}
getElements(arr,num);


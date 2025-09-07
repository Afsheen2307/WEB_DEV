let array=[2,2,2,2];
const arrayAverage = (array) => {
    let sum=0;
    for(let number of array){
        sum+=number;
    }return sum/array.length;
};
console.log(arrayAverage(array));
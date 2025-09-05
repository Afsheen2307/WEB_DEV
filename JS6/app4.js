  let sum=54;   //Global Scope

function calSum(a,b){
   // let sum=a+b;   // this is not accessible outside function (Function Scope)
    console.log(sum);
}

console.log(calSum(1,2));
console.log(sum);

// {
//     let a=25;
// }
// console.log(a);

// for(let i=1; i<=5; i++){
//     console.log(i);
// }
// console.log(i);

let age=25;
if(age>=18){
    let str="adult";
    console.log(str)
}
//console.log(str);// str not defined because of block scope 

function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc(){
        let a=10;
        console.log(x);
        console.log(y);
    }
    // let x=5;     //hoisting
    // let y=6;
    // console.log(a);// lexical does not work in opposite direction i.e. inside out
    innerFunc();
}

// console.log(outerFunc()); 
// console.log(innerFunc());
console.log(outerFunc());
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
//console.log(str);

function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc(){
        let a=10;
        console.log(x);
        console.log(y);
    }
    // let x=5;
    // let y=6;
    console.log(a);
    innerFunc();
}

// console.log(outerFunc());
console.log(innerFunc());
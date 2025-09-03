function sum(a,b){
    console.log("hello");
    console.log("Hello");
    return a+b;
    console.log("hello2");
    console.log("hello2");

}
// let s= sum(40,90);
// console.log(s);

let s=sum(sum(1,2),3);
console.log(s);

function isAdult(age){
    if(age>=18){
        return "Adult";
    } else{
        return "Not adult";
    }
    console.log("Bye Bye");
}
console.log(isAdult(23));
console.log(isAdult(11));
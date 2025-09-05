function multipleGreet(func,count){ //higher order function
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet=function(){
    console.log("hello");
}

// greet();
// greet();
// greet();
// greet();

multipleGreet(greet,500);
//multipleGreet(greet(),500); // always pass function definition

// multipleGreet(function(){console.log("Namaste")},500);


// let odd=function(n){
//     console.log((n%2!=0));
// }
// let even=function(n){
//     console.log(n%2==0);
// }
function oddEvenFactory(request){
    if(request=='odd'){
        // let odd=function(n){
        return function(n){
            console.log(!(n%2==0));
        }
        //return odd;
    }
    else if(request=='even'){
        //let even=function(n){
        return function(n){
            console.log(n%2==0);
        }
        //return even;
    }
    else{
        console.log("Wrong request");
    }
}

let request="odd";
let fun=oddEvenFactory(request);
fun(3);//true
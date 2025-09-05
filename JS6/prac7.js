let greet="hello"; //Global scope

function changeGreet(){
    let greet="namaste";   // function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);   //lexical scope
    }
}
console.log(greet);
console.log(changeGreet());
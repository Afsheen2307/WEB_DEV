//conditional statements
//if statement
// console.log("before my if statement");
// let age=24;
// if(age>=18){
//     console.log("you can vote");
// }
// console.log("after my if statement");
// if(age>20){
//     console.log("you are in your 20s");
// }

//else if statement
// let marks=75;
// if(marks>=80){
//     console.log("A+");
// }else if(marks>=60){
//     console.log("A");
// }else if(marks>=33){
//     console.log("B");
// }else if(marks<33){
//     console.log("F");
// }

//else statements

// let age=17;
// if(age>=18){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }

//nested if-else statements

let marks=40;
if(marks>=33){
    console.log("Pass");
    if(marks>=80){
        console.log("Grade : O ");
    }else{
        console.log("Grade : A");
    }
}else{
    console.log("Better luck next time!");
}
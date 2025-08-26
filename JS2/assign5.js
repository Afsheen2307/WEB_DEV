let num1=5;
let num2=12;
let num3=8;
//if(num1>num2){
//     if(num1>num3){
//     console.log(`${num1} is the largest number among all three`);
//     }else{
//         console.log(`${num3} is the largest`);
//     }
// }else{
//     if(num2>num3){
//         console.log(`${num2} is the largest`);
//     }else{
//         console.log(`${num3} is the largest`);
//     }
// }

if((num1>num2)&&(num2>num3)){
    console.log(`${num1} is the largest`);
}else if((num2>num1)&&(num2>num3)){
    console.log(`${num2} is the largest`);
}else{
    console.log(`${num3} is the largest`);
}
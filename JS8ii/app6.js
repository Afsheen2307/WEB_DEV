// function sum(...args){
//     //arguments
//     for (let i=0;i<args.length;i++){
//         console.log("you gave us: ",args[i]);
//     }
// }

function min(a,b, c, d){ // we also pass without any argument 
    console.log(arguments);//argument is a collection
    console.log(arguments.length);
   // arguments.push(9);//argument is not an array so this will throw an error
}

min(1,3,5,2);


// function sum(){
//     return arguments.reduce((sum,ele)=> sum+ele);
// }

// console.log(sum());

// in this case we use rest

function sum(...args){
    return args.reduce((sum,ele)=> sum+ele);    
}
console.log(sum(1,2,3,4));

function max(msg,...args){
    console.log(msg);
    return args.reduce((max,ele)=>{
        if(max<ele){
            return ele;
        }else{
            return max;
        }
    });
}
console.log(max("Hello",3,2,6,4,8,5,8));
//write additional agruments before rest 

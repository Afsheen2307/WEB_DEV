const sum = (a,b) => {
    console.log(a+b);
};
sum(3,5);

const  cube = n =>{
    console.log(n*n*n);
};

const pow = (a,b) => {
    return a ** b ;
};

cube(2);
console.log(pow(2,3));

const hello=() =>{    // parenthesis are required if there is no argument
    console.log("hello world");
}
hello();

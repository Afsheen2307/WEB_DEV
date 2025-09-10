const student={
    name:"karan",
    age:14,
    class:9,
    subjects:["hindi","english","social","maths"],
    username:"karan@123",
    password:"abcs",
    city:"Pune"
};

// let username= student.username;
// let password=student.password;


//Destructing in objects
// let {username, password}= student;
// console.log(username);


//if we want to store these values in some different variables then do it in key:val pair
let {username:user, password:secret,city:place="Mumbai",result="pass"}=student;
console.log(secret);
console.log(place);
console.log(result);
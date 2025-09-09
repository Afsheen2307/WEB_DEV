let arr=[1, 2, 3, 4, 5];

// let print= function(ele){
//     console.log(ele);
// };
// arr.forEach(print);

arr.forEach(function (ele){
    console.log(ele);
});

//Arrow Function - makes things more compact 
arr.forEach((ele) => {
    console.log(ele);
});

let students =[{
    name: "aman",
    marks:95
},
{
    name:"shradha",
    marks:96.6
},
{
    name:"rajat",
    marks:90
}];
students.forEach((student) => {
    console.log(student);
});

students.forEach((student) =>{
    console.log(student.marks);
});

//Map function
let num=[1,2,3,4];
let double=num.map((ele) =>{
    return ele*2;
});

//let double =num.map((ele)=>{});
console.log(double);

//Map code for calculating GPA
let gpa=students.map((ele)=>{
    return ele.marks/10;
});
console.log(gpa);

//Filter function

let n=[1,2,3,4,5,6,7,8,9];
let ans=n.filter((ele)=>{
    return ele%2==0;//true-even , false-odd
});
console.log("Even numbers in array: ",ans);

//Every function
let a=[2,4,6];
let o=a.every((ele)=>(
    ele%2==0
));
console.log(o);

//Some function
console.log([2,4,3].some((ele) =>(
    ele%2==0
)));

//Reduce function
let numbers=[1,2,3,4];
let finalVal=numbers.reduce((res,ele)=> {
    console.log(res);
    return res+ele
});
console.log(finalVal);




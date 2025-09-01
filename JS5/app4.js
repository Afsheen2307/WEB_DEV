const student={
    name:"afsheen",
    age:23,
    marks:94.4,
    city:"Delhi"
}

student.city="Mumbai";
student.gender="Female";
student.marks="A";
console.log(student);

delete student.marks;
console.log(student);
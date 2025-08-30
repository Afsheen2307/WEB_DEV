let fruits=['mango','apple','banana','litchi','orange'];
fruits.push('pineapple');
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

console.log('reverse');
for(let i=fruits.length-1;i>=0;i--){
    console.log(i,fruits[i]);
}

// console.log("Nested loops with nested arrays");
// let heroes=[['ironman','spiderman','thor'],['superman','flash']];
// for(let i=0;i<=heroes.length;i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

let student=[['aman',95],['shraddha',94.4],['karan',78]];
for(let i=0;i<student.length;i++){
    console.log(`information of student #${i+1}`);
    for(let j=0;j<student[i].length;j++){
        console.log(student[i][j]);
    }
}
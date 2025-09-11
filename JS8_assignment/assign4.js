const doubleAndReturnArgs =(arr,...args) =>[
    ...arr,
    ...args.map((ele)=>2*ele)
];

console.log(doubleAndReturnArgs([1,2,3],4,4));
console.log(doubleAndReturnArgs([2],10,4));
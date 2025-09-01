const obj={
    1:'a',
    2:'b',
    3:'c',
    null:'d',
    undefined:"e",
    true:2
}
//JavaScript is converting all these keyword in a string.
console.log(obj);
console.log(obj[1]);// This 1 is not a index or number, it will first get converted into string then compares this string with the keys and then return the value.
console.log(obj[true]);
//console.log(obj.1);// . dot operator does not converting 1 directly as a string
console.log(obj.null); 
console.log(obj.true);
console.log(obj.undefined);
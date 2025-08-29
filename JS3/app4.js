cars=['audi','bmw','xuv','maruti'];
console.log(cars);
cars.push('toyota');
console.log("after push : ",cars);
cars.push("ferrari");
console.log(cars);
cars.pop();
console.log("after pop : ",cars);
cars.pop()
console.log(cars);

cars.unshift('toyota');
console.log(cars);
cars.unshift('ferrari');
console.log(cars);
cars.shift();
console.log(cars);


console.log('XUV at INDEX',cars.indexOf('xuv'));
console.log('HONDA AT INDEX',cars.indexOf('honda'));

console.log('AUDI INCLUDES :',cars.includes('audi'));

let primary=['a','b','c'];
let secondary=[1,3,5];
console.log('Concatenation: ',primary.concat(secondary));

console.log('Reverse of the array: ',primary.reverse());

console.log(cars);
console.log('Slicing from index 2 to 4: ',cars.slice(2,4));
console.log(cars);
console.log('Slicing from index -2: ',cars.slice(-2));

console.log('cars: ',cars);
console.log(cars.splice(3));
console.log('After splice:',cars);
console.log(cars.splice(0,1,'maruti','ferrari'));
console.log(cars);
console.log(cars.splice(1,2));
console.log(cars);
console.log(cars.splice(0,0,'toyota','xuv','kia'));
console.log(cars);

cars.splice(1,0,'mercedes');
console.log(cars);
cars.splice(1,1,'gwagon');
console.log(cars);
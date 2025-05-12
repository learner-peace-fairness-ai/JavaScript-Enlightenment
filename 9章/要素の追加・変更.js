let myArray = [];
myArray[50] = 'blue';
console.log(myArray.length);

myArray.unshift('unshifted');
console.log(myArray.length, myArray[0]);

myArray.push('pushed');
console.log(myArray.length, myArray[52]);

myArray[50] = { color: 'blue' };
console.log(myArray[50]);

console.log(myArray[50]['color']);
console.log(myArray[50].color);

Object.prototype.foo = 'object-foo';
Array.prototype.foo = 'Array-foo';
const myArray = [];
console.log(myArray.foo);

myArray.foo = 'bar';
console.log(myArray.foo);

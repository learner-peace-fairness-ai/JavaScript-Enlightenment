Array.prototype.foo = 'foo';
const myArray = new Array();
console.log(myArray.constructor.prototype.foo);

console.log(myArray.foo);

const myArray = [];
console.log(myArray.foo);

Object.prototype.foo = 'foo';
console.log(myArray.foo);

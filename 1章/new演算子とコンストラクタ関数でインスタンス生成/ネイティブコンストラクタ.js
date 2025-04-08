const myNumber = new Number(23);
const myString = new String('male');
const myBoolean = new Boolean(false);
const myObject = new Object();
const myArray = new Array('foo', 'bar');
const myFunction = new Function('x', 'y', 'return x * y');
const myDate = new Date();
const myRegExp = new RegExp('\\bt[a-z]+\\b');
const myError = new Error('Error!');

console.log(myNumber.constructor);
console.log(myString.constructor);
console.log(myBoolean.constructor);
console.log(myObject.constructor);
console.log(myArray.constructor);
console.log(myFunction.constructor);
console.log(myDate.constructor);
console.log(myRegExp.constructor);
console.log(myError.constructor);

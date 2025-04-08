const myNull = null;
const myUndefined = undefined;
const primitiveString1 = 'string';
const primitiveString2 = String('string');
const primitiveNumber1 = 10;
const primitiveNumber2 = Number(10);
const primitiveBoolean1 = true;
const primitiveBoolean2 = Boolean('true');

console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof primitiveString1, typeof primitiveString2);
console.log(typeof primitiveNumber1, typeof primitiveNumber2);
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);

const myNumber = new Number(23);
const myString = new String('male');
const myBoolean = new Boolean(false);
const myObject = new Object();
const myArray = new Array('foo', 'bar');
const myFunction = new Function('x', 'y', 'return x * y');
const myDate = new Date();
const myRegExp = new RegExp('\\bt[a-z]+\\b');
const myError = new Error('Error!');

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myObject);
console.log(typeof myArray);
console.log(typeof myFunction);
console.log(typeof myDate);
console.log(typeof myRegExp);
console.log(typeof myError);

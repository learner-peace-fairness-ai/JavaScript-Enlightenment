const myNumber = new Number(23);
const myNumberLiteral = 23;

const myString = new String('male');
const myStringLiteral = 'male';

const myBoolean = new Boolean(false);
const myBooleanLiteral = false;

const myObject = new Object();
const myObjectLiteral = {};

const myArray = new Array('foo', 'bar');
const myArrayLiteral = ['foo', 'bar'];

const myFunction = new Function('x', 'y', 'return x * y');
const myFunctionLiteral = function(x, y) {return x * y};

const myRegExp = new RegExp('\bt[a-z]+\b');
const myRegExpLiteral = /\bt[a-z]+\b/;

console.log(myNumber.constructor, myNumberLiteral.constructor);
console.log(myString.constructor, myStringLiteral.constructor);
console.log(myBoolean.constructor, myBooleanLiteral.constructor);
console.log(myObject.constructor, myObjectLiteral.constructor);
console.log(myArray.constructor, myArrayLiteral.constructor);
console.log(myFunction.constructor, myFunctionLiteral.constructor);
console.log(myRegExp.constructor, myRegExpLiteral.constructor);

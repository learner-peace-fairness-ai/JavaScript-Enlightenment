const primitiveString1 = 'foo';
const primitiveString2 = String('foo');
const primitiveNumber1 = 10;
const primitiveNumber2 = Number('10');
const primitiveBoolean1 = true;
const primitiveBoolean2 = Boolean('true');
console.log(typeof primitiveString1, typeof primitiveString2);
console.log(typeof primitiveNumber1, typeof primitiveNumber2);
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);

const myString = new String('male');
const myNumber = new Number(23);
const myBoolean = new Boolean(false);
const myObject = new Object();
const myArray = new Array('foo', 'bar');
const myFunction = new Function('x', 'y', 'return x * y');
const myDate = new Date();
const myRegExp = new RegExp('\\bt[a-z]+\\b');
const myError = new Error('Error!');
console.log(
    typeof myString,
    typeof myNumber,
    typeof myBoolean,
    typeof myObject,
    typeof myArray,
    typeof myFunction,
    typeof myDate,
    typeof myRegExp,
    typeof myError
);

let myString = new String();
let myNumber = new Number();
let myBoolean = new Boolean(true);
let myObject = new Object();
let myArray = new Array();
let myFunction = new Function('return 2 + 2');
let myRegExp = new RegExp('\\bt[a-z]+\\b');

myString.prop = 'test';
myNumber.prop = 'test';
myBoolean.prop = 'test';
myObject.prop = 'test';
myArray.prop = 'test';
myFunction.prop = 'test';
myRegExp.prop = 'test';

console.log(
  myString.prop,
  myNumber.prop,
  myBoolean.prop,
  myObject.prop,
  myArray.prop,
  myFunction.prop,
  myRegExp.prop
);

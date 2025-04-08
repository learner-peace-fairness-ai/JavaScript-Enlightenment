const myNumber = new Number(23);
const myNumberL = 23;
const myString = new String('male');
const myStringL = 'male';
const myBoolean = new Boolean('true');
const myBooleanL = true;
const myObject = new Object();
const myObjectL = {};
const myArray = new Array();
const myArrayL = [];
const myFunction = new Function();
const myFunctionL = function () {};
const myDate = new Date();
const myRegExp = new RegExp('/./');
const myRegExpL = /./;
const myError = new Error();

console.log(
  myNumber.constructor === Number,
  myNumberL.constructor === Number,
  myString.constructor === String,
  myStringL.constructor === String,
  myBoolean.constructor === Boolean,
  myBooleanL.constructor === Boolean,
  myObject.constructor === Object,
  myObjectL.constructor === Object,
  myArray.constructor === Array,
  myArrayL.constructor === Array,
  myFunction.constructor === Function,
  myFunctionL.constructor === Function,
  myDate.constructor === Date,
  myRegExp.constructor === RegExp,
  myRegExpL.constructor === RegExp,
  myError.constructor === Error
);

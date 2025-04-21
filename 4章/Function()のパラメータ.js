const addFunction_minor = new Function('num1', 'num2', 'return num1 + num2');

const timesFunction_minor = new Function('num1, num2', 'return num1 * num2');

console.log(addFunction_minor(2, 2), timesFunction_minor(2, 2));

const addFunction_major = function (num1, num2) {
  return num1 + num2;
};

function timesFunction_major(num1, num2) {
  return num1 * num2;
}

console.log(addFunction_major(2, 2), timesFunction_major(2, 2));

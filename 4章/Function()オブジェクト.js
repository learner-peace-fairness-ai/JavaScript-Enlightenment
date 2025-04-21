const addNumbersA = new Function('num1', 'num2', 'return num1 + num2');
console.log(addNumbersA(2, 2));

const addNumbersB = function (num1, num2) {
  return num1 + num2;
};
console.log(addNumbersB(2, 2));

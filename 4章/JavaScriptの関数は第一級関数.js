const funcA = function () {};
const funcB = [function () {}];
const funcC = { method: function () {} };

const funcD = function (func) {
  return func;
};

const runFuncPassedToFuncD = funcD(() => console.log('Hi'));
runFuncPassedToFuncD();

let funcE = function () {};
funcE.answer = 'yup';
console.log(funcE.answer);

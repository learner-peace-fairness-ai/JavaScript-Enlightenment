const addConstructor = new Function('x', 'y', 'return x + y');

function addStatement(x, y) {
  return x + y;
}

const addExpression = function (x, y) {
  return x + y;
};

const addNamedExpression = function addNamedExpression(x, y) {
  return x + y;
};

console.log(
  addConstructor(2, 2),
  addStatement(2, 2),
  addStatement(2, 2),
  addNamedExpression(2, 2)
);

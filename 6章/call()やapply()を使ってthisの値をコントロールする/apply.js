const myObject = {};

const myFunction = function (param1, param2) {
  this.foo = param1;
  this.bar = param2;
  console.log(this);
};

myFunction.apply(myObject, ['foo', 'bar']);

console.log(myObject);

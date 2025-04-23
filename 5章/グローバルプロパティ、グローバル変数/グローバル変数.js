var foo = 'bar';

const myApp = function () {
  const run = (() => console.log(foo))();
};

myApp();

const myFunction = function (foo) {
  arguments[0] = 'xyz';
  console.log(foo, arguments[0]);

  foo = 'foo';
  console.log(foo, arguments[0]);

  const arg1 = arguments[1];
  arguments[1] = '123';
  console.log(arg1, arguments[1]);
};

myFunction('abc');

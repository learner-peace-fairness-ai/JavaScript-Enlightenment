const sayHi = function (f) {
  f();
};

sayHi(() => console.log('hi'));

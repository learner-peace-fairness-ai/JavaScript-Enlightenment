window.foo = 'foo';
window.myObject = { foo: 'I am myObject.foo' };

window.sayFoo = function () {
  console.log(this['foo']);
};

window.myObject.sayFoo = sayFoo;
window.myObject.sayFoo();

window.sayFoo();

const Foo = function Foo() {};
Foo.prototype.x = 1;

const fooInstance = new Foo();
console.log(fooInstance.x);

Foo.prototype = { x: 2 };
console.log(fooInstance.x);

const newFooInstance = new Foo();
console.log(newFooInstance.x);

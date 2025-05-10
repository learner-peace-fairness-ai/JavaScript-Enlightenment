const Foo = function Foo() {};
Foo.prototype = { constructor: Foo };

const fooInstance = new Foo();
console.log(fooInstance.constructor === Foo);
console.log(fooInstance.constructor);

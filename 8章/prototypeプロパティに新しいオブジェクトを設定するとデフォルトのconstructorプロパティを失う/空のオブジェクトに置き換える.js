const Foo = function Foo() {};
Foo.prototype = {};

const fooInstance = new Foo();
console.log(fooInstance.constructor === Foo);
console.log(fooInstance.constructor);

const Bar = function Bar() {};
const barInstance = new Bar();
console.log(barInstance.constructor === Bar);
console.log(barInstance.constructor);

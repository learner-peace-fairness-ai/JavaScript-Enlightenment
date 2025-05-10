const Foo = function Foo() {};
Foo.prototype.x = 1;

const fooInstance = new Foo();
console.log(fooInstance.x);
console.log(fooInstance.y);

Foo.prototype.x = 2;
Foo.prototype.y = 3;
console.log(fooInstance.x);
console.log(fooInstance.y);

delete Foo.prototype.x;
console.log(fooInstance.x);
console.log(fooInstance.y);

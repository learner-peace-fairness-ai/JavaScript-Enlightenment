var foo = 'bar';

const windowRef1 = window;
const windowRef2 = this;

console.log(windowRef1, windowRef2);
console.log(windowRef1.foo, windowRef2.foo);

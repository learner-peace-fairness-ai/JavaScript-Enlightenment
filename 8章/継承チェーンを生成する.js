const Person = function () {
  this.bar = 'bar';
};
Person.prototype.foo = 'foo';

const Chef = function () {
  this.goo = 'goo';
};
Chef.prototype = new Person();
const cody = new Chef();

console.log(cody.foo);
console.log(cody.bar);
console.log(cody.goo);

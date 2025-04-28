const Person = function (x) {
  if (x) {
    this.name = x;
  }
};

Person.prototype.whatIsMyName = function () {
  return this.name;
};

const cody = new Person('Cody');
const lisa = new Person('Lisa');
console.log(cody.whatIsMyName(), lisa.whatIsMyName());

Object.prototype.name = 'John';
const john = new Person();
console.log(john.whatIsMyName());

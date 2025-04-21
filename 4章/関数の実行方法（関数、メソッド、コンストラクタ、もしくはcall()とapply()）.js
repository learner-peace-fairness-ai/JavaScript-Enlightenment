const myFunction = function () {
  return 'foo';
};
console.log(myFunction());

const myObject = {
  myFunction: function () {
    return 'bar';
  },
};
console.log(myObject.myFunction());

const Cody = function () {
  this.living = true;
  this.age = 33;
  this.gender = 'male';
  this.getGender = function () {
    return this.gender;
  };
};
const cody = new Cody();
console.log(cody);

const greet = {
  runGreet: function () {
    console.log(this.name, arguments[0], arguments[1]);
  },
};
const lisa = { name: 'lisa' };
greet.runGreet.call(lisa, 'foo', 'bar');
greet.runGreet.apply(lisa, ['foo', 'bar']);

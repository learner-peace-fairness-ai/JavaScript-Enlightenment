const Person = function Person(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = () => this.gender;
};

const cody = new Person(true, 33, 'male');

console.log(typeof cody);
console.log(cody);
console.log(cody.constructor);

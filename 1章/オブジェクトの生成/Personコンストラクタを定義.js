const Person = function (living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = () => this.gender;
};

const cody = new Person(true, 33, 'male');
console.log(cody);

const myString = new String('foo');
console.log(myString);

let codyA = new Object();
codyA.living = true;
codyA.age = 33;
codyA.gender = 'male';
codyA.getGender = () => codyA.gender;
console.log(codyA);

const Person = function (living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = () => this.gender;
};

const codyB = new Person(true, 33, 'male');
console.log(codyB);

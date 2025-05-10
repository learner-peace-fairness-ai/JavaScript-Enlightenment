const Person = function () {};

Person.prototype.level = 1;
Person.prototype.rank = 'beginner';
Person.prototype.getStatus = function () {
  return `level: ${this.level} rank: ${this.rank}`;
};

const chunk = new Person();
console.log(chunk.getStatus());

const Person = function (level, rank) {
  if (level !== undefined) {
    this.level = level;
  }
  if (rank !== undefined) {
    this.rank = rank;
  }
};

Person.prototype.level = 1;
Person.prototype.rank = 'beginner';
Person.prototype.getStatus = function () {
  return `level: ${this.level} rank: ${this.rank}`;
};

const chunk = new Person(10, 'expert');
console.log(chunk.getStatus());

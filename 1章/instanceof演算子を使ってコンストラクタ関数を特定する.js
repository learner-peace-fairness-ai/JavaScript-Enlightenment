const CustomConstructor = function () {
  this.foo = 'bar';
};

const instanceOfCustomObject = new CustomConstructor();
console.log(instanceOfCustomObject instanceof CustomConstructor);

console.log(new Array('foo') instanceof Array);

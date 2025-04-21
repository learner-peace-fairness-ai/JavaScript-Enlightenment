const myObject1 = {
  name: 'myObject1',
  myMethod: function () {
    console.log(this.name);
  },
};
myObject1.myMethod();

const myObject2 = function () {
  console.log(this);
};
myObject2();

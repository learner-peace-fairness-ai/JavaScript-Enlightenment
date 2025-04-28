const myObject = {
  myProperty: 'I can see the light',
  myMethod: function () {
    const that = this;
    const helperFunction = (function () {
      console.log(that.myProperty);
      console.log(this);
    })();
  },
};

myObject.myMethod();

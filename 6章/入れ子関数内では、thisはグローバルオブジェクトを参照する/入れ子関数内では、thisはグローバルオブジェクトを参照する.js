const myObject = {
  func1: function () {
    console.log(this);

    const func2 = (function () {
      console.log(this);

      const func3 = (function () {
        console.log(this);
      })();
    })();
  },
};

myObject.func1();

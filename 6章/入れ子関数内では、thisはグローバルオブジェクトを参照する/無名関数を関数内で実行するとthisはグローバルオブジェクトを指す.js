const foo = {
  func1: function (bar) {
    bar();

    console.log(this);
  },
};

foo.func1(function () {
  console.log(this);
});

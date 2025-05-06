const x = 1;
const foo = function () {
  const x = 2;
  const bar = function () {
    const x = 3;
    console.log(x);
  };

  bar();
};

foo();

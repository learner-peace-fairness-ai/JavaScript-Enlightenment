const x = 10;

const foo = function () {
  const y = 20;
  const bar = function () {
    const z = 30;

    console.log(x + y + z);
  };

  bar();
};

foo();

const myArray = [[[]]];

const myFunction = function () {
  const myFunction = function () {
    const myFunction = function () {};
  };
};

const foo = [
  {
    foo: [
      {
        bar: {
          say: function () {
            return 'hi';
          },
        },
      },
    ],
  },
];

console.log(foo[0].foo[0].bar.say());

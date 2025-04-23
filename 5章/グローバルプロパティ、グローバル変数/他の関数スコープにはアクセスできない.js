const myFunction = function () {
  var foo = 'bar';
};

const myApp = function () {
  try {
    const run = (() => console.log(foo))();
  } catch (e) {
    console.log(e); // エラーが出力される
  }
};

myApp();

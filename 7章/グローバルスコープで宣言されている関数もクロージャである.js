const a = 1;
const func = function () {
  console.log(a);
};

(function (f) {
  const a = 100;
  f();
})(func);

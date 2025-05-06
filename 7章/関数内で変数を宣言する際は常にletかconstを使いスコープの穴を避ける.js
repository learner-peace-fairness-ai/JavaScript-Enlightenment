const foo = (function () {
  const bar = (function () {
    boo = 2;
    let doo = 2;
  })();
})();

console.log(boo);

console.log(doo); // エラーになる

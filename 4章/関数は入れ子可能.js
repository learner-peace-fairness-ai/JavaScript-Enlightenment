const foo = (function () {
  const bar = (function () {
    const goo = (function () {
      console.log(this);
    })();
  })();
})();

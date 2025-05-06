const foo = 0;
console.log(foo);

const myFunction = (function myFunction() {
  const foo = 1;
  console.log(foo);

  const myNestedFunction = (function () {
    const foo = 2;
    console.log(foo);
  })();

  const myNestedFunction2 = (function () {
    console.log(foo);
  })();
})();

eval('const foo = 3; console.log(foo);');

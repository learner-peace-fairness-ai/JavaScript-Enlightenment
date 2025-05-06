const countUpFromZero = (function () {
  let count = 0;
  return () => ++count;
})();

console.log(countUpFromZero());
console.log(countUpFromZero());
console.log(countUpFromZero());

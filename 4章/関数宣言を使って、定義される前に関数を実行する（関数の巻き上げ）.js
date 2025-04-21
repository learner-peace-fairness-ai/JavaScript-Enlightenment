const speak = function () {
  sayYo();
  function sayYo() {
    console.log('Yo');
  }
};
speak();

console.log(sum(2, 2));
function sum(x, y) {
  return x + y;
}

const add = function (x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'pass in numbers';
  }
  return x + y;
};

console.log(add(3, 3));
console.log(add('2', '2'));

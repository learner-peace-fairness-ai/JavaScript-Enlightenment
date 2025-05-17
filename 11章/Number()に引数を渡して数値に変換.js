const numberOne = new Number(1);
console.log(numberOne);
console.log(typeof numberOne);

console.log(Number(1), Number(1, 1), Number(-10), Number(0xff));

console.log(Number('10'), Number('0010'), Number('1.0e1'));

console.log(Number(''), Number(' '), Number('123abc'));

console.log(Number('0x0a'), Number('010'));

console.log(Number(undefined), Number(null), Number(true), Number(false));

console.log(
  Number({}),
  Number(function () {})
);

console.log(Number([]), Number([1]), Number(['010']), Number([1, 2]));

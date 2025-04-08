const price1 = 10;
const price2 = 10;
const price3 = new Number(10);
let price4 = price3;

console.log(price1 === price2);
console.log(price4 === price3);

price4 = 10;
console.log(price4 === price3);
console.log(price4 == price3);

const price5 = new Number(10);
console.log(price5 === price3);
console.log(price5 == price3);

const primitiveString1 = 'foo';
const primitiveString2 = String('foo');
console.log(primitiveString1.toString(), primitiveString2.toString());

const primitiveNumber1 = 10;
const primitiveNumber2 = Number(10);
console.log(primitiveNumber1.toString(), primitiveNumber2.toString());

const primitiveBoolean1 = true;
const primitiveBoolean2 = Boolean(true);
console.log(primitiveBoolean1.toString(), primitiveBoolean2.toString());

/* null と undefined はオブジェクトに変換されないので toString() を実行するとエラーになる */
const myNull = null;
const myUndefined = undefined;
// console.log(myNull.toString());
// console.log(myUndefined.toString());

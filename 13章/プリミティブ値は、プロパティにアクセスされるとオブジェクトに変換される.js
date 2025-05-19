const stringObject = new String('foo');
console.log(stringObject.length);
console.log(stringObject['length']);

const stringLiteral = 'foo';
console.log(stringLiteral.length);
console.log(stringLiteral['length']);

console.log('bar'.length);
console.log('bar'['length']);

const numberObject = new Number(3.14);
console.log(numberObject.toFixed());
console.log(numberObject['toFixed']());

const numberLiteral = 3.14;
console.log(numberLiteral.toFixed());
console.log(numberLiteral['toFixed']());

console.log((123).toString());
console.log((123)['toString']());

const booleanObject = new Boolean(0);
console.log(booleanObject.toString());
console.log(booleanObject['toString']());

const booleanLiteral = false;
console.log(booleanLiteral.toString());
console.log(booleanLiteral['toString']());

console.log(true.toString());
console.log(true['toString']());

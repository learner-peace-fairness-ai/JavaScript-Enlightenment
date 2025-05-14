console.log(String());

console.log(String(undefined), String(null), String(true), String(false));

console.log(String(NaN), String(Infinity), String(-Infinity));

console.log(String(1.0), String(10.1));

console.log(String(1.0e10), String(-10.1));

console.log(String(1000000000000000000000), String(0.000000999));

console.log(String(0o10), String(0xff));

const obj = { prop: 'property' };
const arr = [1, 2, 3];
console.log(String(obj), String(arr));

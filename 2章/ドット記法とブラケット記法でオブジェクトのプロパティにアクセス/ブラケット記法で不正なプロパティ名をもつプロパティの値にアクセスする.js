const myObject = { 123: 'zero', class: 'foo' };

console.log(myObject['123'], myObject['class']);

// console.log(myObject.123);  /* エラーになる */
console.log(myObject.class); /* エラーにならないが非推奨 */

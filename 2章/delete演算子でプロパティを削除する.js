let foo = { bar: 'bar' };
console.log('bar' in foo);

delete foo.bar;
console.log('bar' in foo);

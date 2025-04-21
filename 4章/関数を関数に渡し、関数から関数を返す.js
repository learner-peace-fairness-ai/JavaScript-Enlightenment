const foo = (f) => f;

const bar = foo(() => console.log('Hi'));
bar();

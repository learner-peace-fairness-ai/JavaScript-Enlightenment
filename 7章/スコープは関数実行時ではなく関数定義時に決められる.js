function parentFunction() {
  const foo = 'foo';
  return () => console.log(foo);
}

const nestedFunction = parentFunction();
nestedFunction();

let foo = 1;

if (true) {
  let foo;
  for (let i = 2; i <= 5; i++) {
    foo = i;
    console.log(foo);
  }
}

console.log(foo);

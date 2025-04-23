var a = 10;
let b = 100;
c = 1000; // グローバルプロパティ

delete a;
delete b;
delete c;

console.log(a);
console.log(b);
console.log(c); // グローバルプロパティは削除できるので、エラーになる

const foo = (function foo() {
  console.log(arguments.callee);
  // arguments.callee()でfoo()を再帰的に実行することができる
})();

(function (msg) {
  console.log(msg);
})('Hi');

((msg) => console.log(msg))('Hi');

// function sayHi() {console.log('hi');}();  // 関数宣言は即時実行不可

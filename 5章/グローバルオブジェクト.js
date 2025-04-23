// varはグローバルに宣言したときのみwindowに追加される
var myStringVar = 'myString';
var myFunctionVar = function () {};
console.log('myStringVar' in window);
console.log('myFunctionVar' in window);

// 宣言なしの変数はwindowに追加される
myString = 'myString';
myFunction = function () {};
console.log('myString' in window);
console.log('myFunction' in window);

// letとconstはwindowには追加されない
let myStringLet = 'myString';
console.log('myStringLet' in window);

const myFunctionConst = function () {};
console.log('myFunctionConst' in window);

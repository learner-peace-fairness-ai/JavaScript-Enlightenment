const logElementNumber = (function () {
  const funcArray = [];
  let i;
  const func = function (i) {
    // パラメータにiを指定しているため、この関数スコープにローカル変数iが定義される
    return () => console.log(i);
  };

  for (i = 0; i < 3; i++) {
    funcArray[i] = func(i); // インデックスを出力する関数をfuncArrayのそれぞれの要素に格納
  }

  return funcArray;
})();

logElementNumber[0]();
logElementNumber[1]();
logElementNumber[2]();

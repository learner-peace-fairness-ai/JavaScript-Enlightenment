const logElementNumber = (function () {
  const funcArray = [];
  let i;
  for (i = 0; i < 3; i++) {
    funcArray[i] = () => console.log(i);
  }

  return funcArray;
})();

logElementNumber[0]();
logElementNumber[1]();
logElementNumber[2]();

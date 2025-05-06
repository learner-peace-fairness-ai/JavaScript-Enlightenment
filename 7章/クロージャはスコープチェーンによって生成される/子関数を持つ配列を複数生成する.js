const logElementNumber = function (len) {
  const funcArray = [];
  let i;
  const func = function (n) {
    return () => console.log(n, i);
  };

  for (i = 0; i < len; i++) {
    funcArray[i] = func(i);
  }

  return funcArray;
};

const myArray1 = logElementNumber(3);
const myArray2 = logElementNumber(5);

myArray1[1]();
myArray1[2]();
myArray2[1]();
myArray2[2]();

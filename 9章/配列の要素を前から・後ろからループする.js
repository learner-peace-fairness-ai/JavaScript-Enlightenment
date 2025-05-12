const myArray = ['blue', 'green', 'orange', 'red'];
const myArrayLength = myArray.length;
let i = 0;
while (i < myArrayLength) {
  console.log(myArray[i]);
  i++;
}

i = myArrayLength - 1;
while (i >= 0) {
  console.log(myArray[i]);
  i--;
}

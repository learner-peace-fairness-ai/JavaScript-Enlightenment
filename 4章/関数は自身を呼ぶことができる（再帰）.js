const countDownFrom = function countDownFrom(num) {
  console.log(num);
  num--;
  if (num < 0) return false;

  countDownFrom(num);
};

countDownFrom(5);

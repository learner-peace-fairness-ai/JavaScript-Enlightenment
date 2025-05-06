const sayHiText = 'howdy';

const func1 = function () {
  const func2 = function () {
    console.log(sayHiText);
  };

  func2();
};

func1();

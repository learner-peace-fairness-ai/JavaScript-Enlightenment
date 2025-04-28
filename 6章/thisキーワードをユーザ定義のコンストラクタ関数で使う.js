const Person = function (name) {
  if (name) {
    this.name = name;
  } else {
    this.name = 'John doe';
  }
};

const cody = new Person('Cody Lindley');
console.log(cody.name);

// new演算子をつけない
const errorCody = Person('Cody Lindley');
console.log(window.name); // thisはグローバルオブジェクトを指すのでwindowに追加された
console.log(errorCody.name); // errorCodyにはプロパティは追加されずエラーになる

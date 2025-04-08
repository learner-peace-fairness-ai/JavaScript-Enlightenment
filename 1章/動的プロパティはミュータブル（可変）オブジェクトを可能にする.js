String.augmentedPropertyes = [];

if (!String.prototype.trimiIt) {
  String.prototype.trimiIt = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };

  String.augmentedPropertyes.push('trimIt');
}

const myString = '  trim me  ';
console.log(myString.trimiIt());

console.log(String.augmentedPropertyes.join());

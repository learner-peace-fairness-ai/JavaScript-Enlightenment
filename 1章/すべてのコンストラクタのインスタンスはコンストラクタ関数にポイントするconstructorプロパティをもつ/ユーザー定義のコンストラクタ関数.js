const CustomConstructor = function CustomConstructor() {
  return 'Wow!';
};
const instanceOfCustomObject = new CustomConstructor();

console.log(instanceOfCustomObject.constructor === CustomConstructor);

console.log(instanceOfCustomObject.constructor);

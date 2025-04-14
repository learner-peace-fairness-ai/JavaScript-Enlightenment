const cody = {
  age: 33,
  gender: 'male',
};

for (let key in cody) {
  if (cody.hasOwnProperty(key)) {
    console.log(key);
  }
}

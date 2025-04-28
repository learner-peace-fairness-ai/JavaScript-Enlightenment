const cody = {
  living: true,
  age: 33,
  gender: 'male',
  getGender: function () {
    return this.gender;
  },
  //   getGender: () => this.gender,  // アロー関数のthisはオブジェクトを参照しない
};

console.log(cody.getGender());

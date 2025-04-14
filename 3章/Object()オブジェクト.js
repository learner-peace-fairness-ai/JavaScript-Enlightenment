const cody = {};
for (key in cody) {
  if (cody.hasOwnProperty(key)) {
    console.log(key); // codyはプロパティを持たないので、何も出力されない
  }
}

function slasher(arr, howMany) {
  for (i = 0; i < howMany; i++) {
    arr.shift();
  }
  return arr;
}

module.exports = slasher;
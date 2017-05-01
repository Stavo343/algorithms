function dropElements(arr, func) {
  for (var i = 0; i < arr.length; i) {
    if (func(arr[i]) === false) {
      arr.shift();
    } else {
      break;
    }
  }
  return arr;
}

module.exports = dropElements;
function findElement(arr, func) {
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      num = arr[i];
      break;
    } else {
      num = undefined;
    }
  }
  return num;
}

module.exports = findElement;
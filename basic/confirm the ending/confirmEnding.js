function confirmEnding(str, target) {
  var difference = str.length - target.length;
  if (str.substring(difference) == target) {
    return true;
  } else {
    return false;
  }
}

module.exports = confirmEnding;
function fearNotLetter(str) {
  var missing = "";
  for (var i = 0; i < str.length-1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
      missing = String.fromCharCode(str.charCodeAt(i) + 1);
      break;
    } else {
      missing = undefined;
    }
  }
  return missing;
}

module.exports = fearNotLetter;
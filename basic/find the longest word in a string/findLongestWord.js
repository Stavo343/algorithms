function findLongestWord(str) {
  var split = str.split(" ");
  var lengths = split.map(function(i) {
    return i.length;
  });
  var longest = lengths.sort(function(x, y) {
    return y - x;
  });
  return longest[0];
}

module.exports = findLongestWord;
function getIndexToIns(arr, num) {
  arr.push(num);
  var sorted = arr.sort(function (x, y) {
    return x - y;
  });
  var ans = arr.indexOf(num);
  return ans;
}

module.exports = getIndexToIns;
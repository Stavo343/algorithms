function sumAll(arr) {
  var sorted = arr.sort(function (y, x) {
    return x - y;
  });
  
  var diff = sorted[0] - sorted[1];
  var sum = [];
  for (var i = sorted[1]; i < sorted[0] + 1; i++) {
    sum.push(i);
  }
  var final = sum.reduce(function(s, t) {
    return s + t;
  });
  return final;
}

module.exports = sumAll;
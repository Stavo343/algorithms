function permAlone(str) {
  
  if (str.length == 1) {
    return 1;
  }
  
  str = str.split("");
  
  var setCounts = {};
  
  setCounts = [
    ["a", 0],
    ["b", 0],
    ["c", 0],
    ["d", 0],
    ["e", 0],
    ["f", 0],
    ["g", 0],
    ["h", 0],
    ["i", 0],
    ["j", 0],
    ["k", 0],
    ["l", 0],
    ["m", 0],
    ["n", 0],
    ["o", 0],
    ["p", 0],
    ["q", 0],
    ["r", 0],
    ["s", 0],
    ["t", 0],
    ["u", 0],
    ["v", 0],
    ["w", 0],
    ["x", 0],
    ["y", 0],
    ["z", 0],
    ];
  
  function count(x) {
    for (var i = 0; i < setCounts.length; i++) {
      if (x == setCounts[i][0]) {
        setCounts[i][1] = setCounts[i][1] + 1;
      }
    }
  }
  
  str.map(count);
  
  var setCount = [];
  
  for (var j = 0; j < setCounts.length; j++) {
    if (setCounts[j][1] > 1) {
      setCount.push(setCounts[j]);
    }
  }
  
  if (setCount[0][1] == str.length) {
    return 0;
  }
  
  function factorial(y) {
    for (var k = y - 1; k > 0; k--) {
      y = y * k;
    } return y;
  }
  
  var invalids = 0;
  
  function defineInvalids(z) {
    var singular = 0;
    for (var n = 2; n <= z[1]; n++) {
      singular = singular + (factorial(str.length - (n - 1)) * factorial(n));
    }
    invalids = invalids + singular;
  }
  
  for (var m = 0; m < setCount.length; m++) {
    defineInvalids(setCount[m]);
  }
  
  var overlap = 0;
  
  var twosOnly = factorial(str.length - setCount.length) * 2;
    
  for (var o = 1; o < setCount.length; o++) {
    twosOnly = twosOnly * 2;
    overlap = twosOnly;
  }
  
  var answer = factorial(str.length) - invalids + overlap;
  
  return answer;
}

module.exports = permAlone;
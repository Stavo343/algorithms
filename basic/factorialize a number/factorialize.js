function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    var array = [num];
    for (x = num; x > 1; x--) {
      array.push(x - 1);
    } 
    var factorial = array.reduce(function(a, b) {
      return a * b;
    });
    return factorial;
  }
}

module.exports = factorialize;
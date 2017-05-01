function mutation(arr) {
  var index = [];
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  arr[1] = arr[1].split("");
  for (var i = 0; i < arr[1].length; i++) {
    var check = arr[0].indexOf(arr[1][i]);
    index.push(check);
  }
  var sort = index.sort(function(x, y) {
    return x - y;
  });
  if (sort[0] === -1) {
    return false;
  } else {
    return true;
  }
}

module.exports = mutation;
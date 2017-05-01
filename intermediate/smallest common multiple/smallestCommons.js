function smallestCommons(arr) {
  var variables = [];
  var limit = [];
  var lcm = [];

  if (arr[0] > arr[1]) {
    for (var v = arr[0]; v >= arr[1]; v--) {
      variables.push(v);
    }
  } else {
      for (var w = arr[1]; w >= arr[0]; w--) {
        variables.push(w);
      }
    }
  
  //passes any number through to see if it is a common multiple
  function cm(check) {
    for (var j = 0; j < variables.length; j++) {
      if (check % variables[j] !== 0) {
        return false;
      } 
    }
    return true;
  }


  function findLimit(multiple, factor) {
    return multiple * factor;
  }

  limit = variables.reduce(findLimit);

  for (var i = 1; i <= limit; i++) {
    if (cm(i) === true) {
      lcm = i;
      break;
    }
  }
  return lcm;
}

module.exports = smallestCommons;

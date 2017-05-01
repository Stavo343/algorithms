function steamrollArray(arr) {
  var pancake = [];
  function fleshOut(plane) {
    for (var i = 0; i < plane.length; i++) {
      if (Array.isArray(plane[i]) === true) {
        fleshOut(plane[i]);
      } else {
        pancake.push(plane[i]);
      }
    }
  }
  
  fleshOut(arr);
  
  return pancake;
}

module.exports = steamrollArray;
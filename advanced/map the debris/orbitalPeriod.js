function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  for (var i = 0; i < arr.length; i++) {
    arr[i].orbitalPeriod = Math.round(Math.PI * 2 * Math.pow((Math.pow((earthRadius + arr[i].avgAlt), 3)/GM), 0.5));
  delete arr[i].avgAlt;
  }
  
  return arr;
}

module.exports = orbitalPeriod;
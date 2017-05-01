function updateInventory(arr1, arr2) {
  
  function checkStock(x) {
    for (var i = 0; i < arr1.length; i++) {
      if (x[1] == arr1[i][1]) {
        arr1[i][0] = arr1[i][0] + x[0];
        return;
      } 
    } arr1.push(x);
  }
  
  for (var j = 0; j < arr2.length; j++) {
    checkStock(arr2[j]);
  }
  
  var sortingHat = [];
  
  for (var k = 0; k < arr1.length; k++) {
    sortingHat.push(arr1[k][1]);
  }
  
  sortingHat.sort();
  
  var sorted = [];
  
  function match(x) {
    for (var l = 0; l < arr1.length; l++) {
      if (x == arr1[l][1]) {
        sorted.push(arr1[l]);
      }
    }
  }
  
  for (var m = 0; m < sortingHat.length; m++) {
    match(sortingHat[m]);
  }
  
  return sorted;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

module.exports = updateInventory;
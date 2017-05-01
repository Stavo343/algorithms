function diffArray(mom, dad) {
  var baby = [];
  for (var x = 0; x < mom.length; x++) {
    if (dad.indexOf(mom[x]) === -1) {
      baby.push(mom[x]);
    }
  }
  for (var y = 0; y < dad.length; y++) {
    if (mom.indexOf(dad[y]) === -1) {
      baby.push(dad[y]);
    } 
  }
  return baby;
}

module.exports = diffArray;
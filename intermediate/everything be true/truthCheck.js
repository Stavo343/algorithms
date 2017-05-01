function truthCheck(collection, pre) {
  
  var existential = Object.keys(collection);
  
  var woodenTeeth = [0, -0, "", undefined, null, false, NaN];
  
  function candidates() {
    for (var i = 0; i < collection.length; i++) {
      if (!collection[existential[i]].hasOwnProperty(pre)) {
        return false;
      }
    } return true;
  }
  
  function weeding() {
    if (!candidates(collection)) {
      return false;
    } else {
      for (var j = 0; j < collection.length; j++) {
        if (woodenTeeth.indexOf(collection[existential[j]][pre]) != -1 || Number.isNaN(collection[existential[j]][pre]) === true) {
          return false;
        }
      }
    } return true;
  }
  
  return weeding();
}

module.exports = truthCheck;
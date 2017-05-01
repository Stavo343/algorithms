function sym(args) {
  
  var slim = [];
  var slym = [];
  
  function lipo(lipids) {
    for (var i = 0; i < lipids.length; i++) {
      for (var j = 0; j < lipids.length; j++) {
        if (lipids.lastIndexOf(lipids[i]) !== i) {
          lipids.splice(lipids.lastIndexOf(lipids[i]), 1);
        }
      }
    } slim.push(lipids);
  }
  
  for (var k = 0; k < arguments.length; k++) {
    lipo(arguments[k]);
  }
  
  function lipo2(sats, trans) {
    for (var m = 0; m < sats.length; m++) {
      if (trans.indexOf(sats[m]) == -1) {
        trans.unshift(sats[m]);
      } else {
        trans.splice(trans.indexOf(sats[m]), 1);
      }
    } 
  }
  
  for (var l = 0; l < slim.length - 1; l++) {
    lipo2(slim[l], slim[l + 1]);
  }
 
  return slim[slim.length - 1];
}

module.exports = sym;
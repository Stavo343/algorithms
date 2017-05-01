function pairwise(arr, arg) {
  
  var singles = [];
  
  var couples = [0];
  
  for (var i = 0; i < arguments[0].length; i++) {
    singles[i] = [arguments[0][i], "unused"];
  }
  
  for (var k = 0; k < singles.length; k++) {
    if (singles[k][1] == "unused") {
      for (var j = k + 1; j < singles.length; j++) {
        if (singles[j][1] == "unused" && singles[k][0] + singles[j][0] == arguments[1]) {
          couples.push(k + j);
          singles[k][1] = "used";
          singles[j][1] = "used";
          break;
        }
      }
    }
  }
  
  function lovebirds(groupHug, xoxo) {
    return groupHug + xoxo;
  }
  
  return couples.reduce(lovebirds);
}

module.exports = pairwise;
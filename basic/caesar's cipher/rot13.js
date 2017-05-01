function rot13(str) { // LBH QVQ VG!
  var translate = "";
  var shatter = str.split("");
  var code = function code(x) {
    return x.charCodeAt();
  };
  var rosetta = shatter.map(code);
  var stone = [];
  
  for (var i = 0; i < rosetta.length; i++) {
    if (rosetta[i] >= 65 && rosetta[i] <= 77) {
      stone.push(rosetta[i] + 13);
    } else if (rosetta[i] >= 77 && rosetta[i]<= 90) {
      stone.push(rosetta[i] - 13);
    } else {
	  stone.push(rosetta[i]);
	}
  }
return String.fromCharCode.apply(null, stone);
}

module.exports = rot13;
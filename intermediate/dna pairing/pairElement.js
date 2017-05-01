function pairElement(str) {
  var split = str.split("");
  var answer = [];
  for (var i = 0; i < split.length; i++) {
    switch (split[i]) {
      case "A":
        answer.push(["A","T"]);
        break;
      case "T":
        answer.push(["T","A"]);
        break;
      case "C":
        answer.push(["C","G"]);
        break;
      case "G":
        answer.push(["G","C"]);
        break;
    }
  }
  return answer;
}

module.exports = pairElement;
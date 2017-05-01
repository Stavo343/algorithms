function translatePigLatin(str) {
  var answer = [];
  var split = str.split("");
  if (split[0] != "a" && split[0] != "e" && split[0] != "i" && split[0] != "o" && split[0] != "u") {
    if (split[1] != "a" && split[1] != "e" && split[1] != "i" && split[1] != "o" && split[1] != "u") {
      var jigsaw = split.slice(2, split.length);
      jigsaw.push(split[0]);
      jigsaw.push(split[1]);
      jigsaw.push("ay");
      answer = jigsaw.join("");
    } else {
      var puzzle = split.slice(1, split.length);
      puzzle.push(split[0]);
      puzzle.push("ay");
      answer = puzzle.join("");
    }
  } else {
    answer = str + "way";
  }
  return answer;
}

module.exports = translatePigLatin;
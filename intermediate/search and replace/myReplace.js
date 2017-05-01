function myReplace(str, before, after) {
  var split = str.split(" ");
  var nugget = "";
  var fixed = "";
  var replicate = after.split("");
  for (var i = 0; i < split.length; i++) {
    if (split[i] == before) {
      nugget = split[i];
    } 
  }
  var dissect = nugget.split("");
  if (dissect[0] === dissect[0].toUpperCase()) {
      replicate[0] = replicate[0].toUpperCase();
      replicate = replicate.join("");
      fixed = str.replace(before, replicate);
    } else {
      fixed = str.replace(before, after);
    }
  return fixed;
}

module.exports = myReplace;
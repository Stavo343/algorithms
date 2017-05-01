function spinalCase(str) {
  str = str.split("");
  var replaced = [];
  replaced.push(str[0].toLowerCase());
  for (var i = 1; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      replaced.push(str[i]);
    } else if (/[^a-zA-Z]/.test(str[i])) {
      replaced.push("-");
    } else if (/[A-Z]/.test(str[i]) && /[a-zA-Z]/.test(str[i-1])) {
      replaced.push("-" + str[i].toLowerCase());
    } else if (/[A-Z]/.test(str[i]) && /[^a-zA-Z]/.test(str[i-1])) {
      replaced.push(str[i].toLowerCase());
    }
  }
  return replaced.join("");
}

module.exports = spinalCase;
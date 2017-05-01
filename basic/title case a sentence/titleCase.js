function titleCase(str) {
  var lower = str.toLowerCase();
  var split = lower.split(" ");
  for (var i = 0; i < split.length; i++) {
    var splitter = split[i].split('');
    splitter[0] = splitter[0].toUpperCase();
    split[i] = splitter.join('');
  }
    return split.join(' ');
}

module.exports = titleCase;
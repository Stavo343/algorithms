function repeatStringNumTimes(str, num) {
  var blank = "";
  for (i = 1; i < num; i++) {
    blank = blank + str;
  }
  if (num > 0) {
    return blank + str;
  } else {
    return "";
  }
}

module.exports = repeatStringNumTimes;
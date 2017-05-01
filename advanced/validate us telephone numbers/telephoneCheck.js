function telephoneCheck(str) {
  
  if (/[^0-9()-\s]/.test(str)) {
    return false;
  }
  
  str = str.split("");
  
  if (/[^0-9(]/.test(str[0])) {
    return false;
  }
  
  var filtered = [];
  
  for (var i = 0; i < str.length; i++) {
    if (/[0-9()]/.test(str[i])) {
      filtered.push(str[i]);
    }
  }
  
  if (filtered[0] == 1) {
    if (filtered.length != 11 && filtered.length != 13) {
      return false;
    }
    if (filtered.length == 13) {
      if (filtered.indexOf("(") != 1 || filtered.indexOf("(", 2) != -1 || filtered.indexOf(")") != 5 || filtered.indexOf(")", 6) != -1) {
      return false;
    }
  }
    if (filtered.length == 11) {
      if (filtered.indexOf("(") != -1 || filtered.indexOf(")") != -1) {
        return false;
      }
    }
  }
  
  if (filtered[0] != 1) {
    if (filtered.length != 10 && filtered.length != 12) {
      return false;
    }
    if (filtered.length == 12) {
      if (filtered.indexOf("(") !== 0 || filtered.indexOf("(", 1) != -1 || filtered.indexOf(")") != 4 || filtered.indexOf(")", 5) != -1) {
      return false;
    }
  }
    if (filtered.length == 10) {
      if (filtered.indexOf("(") != -1 || filtered.indexOf(")") != -1) {
        return false;
      }
    }
  }
  return true;
}

module.exports = telephoneCheck;
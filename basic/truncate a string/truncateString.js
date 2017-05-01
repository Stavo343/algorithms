function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  } else {
    if (num > 3) {
      return str.slice(0, num - 3) + "...";
    } else {
	  return str.slice(0, num) + "...";
	}
  }
}

module.exports = truncateString;
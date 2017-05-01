function convertHTML(str) {
  str = str.split("");
  var replaced = [];
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "&":
        replaced.push("&amp;");
        break;
      case "<":
        replaced.push("&lt;");
        break;
      case ">":
        replaced.push("&gt;");
        break;
      case '"':
        replaced.push("&quot;");
        break;
      case "'":
        replaced.push("&apos;");
        break;
      default:
        replaced.push(str[i]);
    }
  }
  replaced = replaced.join("");
  return replaced;
}

module.exports = convertHTML;
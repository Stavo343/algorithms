function reverseString(str) {
  var array = str.split("");
  var reverse = array.reverse();
  var answer = reverse.join("");
  return answer;
}

module.exports = reverseString;
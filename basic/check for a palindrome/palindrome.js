function palindrome(str) {
  var formatted = str.replace(/\W|_/g, "");
  var lower = formatted.toLowerCase();
  var split = lower.split("");
  var palin = split.slice(0);
  var drome = split.slice(0);
  var count = Math.floor(split.length/2);
  for (x = 0; x < count; x++) {
    palin.pop(); 
  }
  for (x= 0; x < count; x++) {
    drome.shift();
  }
  var dromerev = drome.reverse();
  var pal = palin.join("");
  var dro = dromerev.join("");
  if (pal == dro) {
    return true;
  } else {
    return false;
  }  
}

module.exports = palindrome;
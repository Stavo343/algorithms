function convertToRoman(num) {
  if (num > 3999) {
    return "The Romans can't count that high!";
  }
  var translated = [];
  var str = num.toString();
  var ones = str.charAt(str.length - 1);
  var tens = str.charAt(str.length - 2);
  var hundreds = str.charAt(str.length - 3);
  var thousands = str.charAt(str.length - 4);
  switch(ones) {
    case "1":
      translated.unshift("I");
      break;
    case "2":
      translated.unshift("II");
      break;
    case "3":
      translated.unshift("III");
      break;
    case "4":
      translated.unshift("IV");
      break;
    case "5":
      translated.unshift("V");
      break;
    case "6":
      translated.unshift("VI");
      break;
    case "7":
      translated.unshift("VII");
      break;
    case "8":
      translated.unshift("VIII");
      break;
    case "9":
      translated.unshift("IX");
      break;
  }
  switch(tens) {
    case "1":
      translated.unshift("X");
      break;
    case "2":
      translated.unshift("XX");
      break;
    case "3":
      translated.unshift("XXX");
      break;
    case "4":
      translated.unshift("XL");
      break;
    case "5":
      translated.unshift("L");
      break;
    case "6":
      translated.unshift("LX");
      break;
    case "7":
      translated.unshift("LXX");
      break;
    case "8":
      translated.unshift("LXXX");
      break;
    case "9":
      translated.unshift("XC");
      break;
  }
  switch(hundreds) {
    case "1":
      translated.unshift("C");
      break;
    case "2":
      translated.unshift("CC");
      break;
    case "3":
      translated.unshift("CCC");
      break;
    case "4":
      translated.unshift("CD");
      break;
    case "5":
      translated.unshift("D");
      break;
    case "6":
      translated.unshift("DC");
      break;
    case "7":
      translated.unshift("DCC");
      break;
    case "8":
      translated.unshift("DCCC");
      break;
    case "9":
      translated.unshift("CM");
      break;
  }
  switch(thousands) {
    case "1":
      translated.unshift("M");
      break;
    case "2":
      translated.unshift("MM");
      break;
    case "3":
      translated.unshift("MMM");
      break;
  }
  return translated.join("");
}

module.exports = convertToRoman;
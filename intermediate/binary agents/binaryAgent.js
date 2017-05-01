function binaryAgent(str) {
  
  str = str.split(" ");
  
  var unicodes = [];
  
  function sum(total, additives) {
    return total + additives;
  }
  
  function translate(rosetta) {    
    
    var code = [];
  
    if (rosetta[0] === "1") {
      code.push(128);
    }
    
    if (rosetta[1] === "1") {
      code.push(64);
    }
    
    if (rosetta[2] === "1") {
      code.push(32);
    }
    
    if (rosetta[3] === "1") {
      code.push(16);
    }
    
    if (rosetta[4] === "1") {
      code.push(8);
    }
    
    if (rosetta[5] === "1") {
      code.push(4);
    }
    
    if (rosetta[6] === "1") {
      code.push(2);
    }
    
    if (rosetta[7] === "1") {
      code.push(1);
    }    
    unicodes.push(String.fromCharCode(code.reduce(sum)));
  }
  
  for (var i = 0; i < str.length; i++) {
    translate(str[i]);
  }
  
  var puzzle = unicodes.join("");
  
  return puzzle;
}

module.exports = binaryAgent;
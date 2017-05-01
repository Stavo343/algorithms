function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  var i = 0;
  
  function thruCollection() {
    for (var j = 0; j < keys.length; j++) {
      if (source[keys[j]] != collection[i][keys[j]]) {
        return false;
      }
    } arr.push(collection[i]);
  }
  
  for (i = 0; i < collection.length; i++) {
    thruCollection();
  }
  // Only change code above this line
  return arr;
}

module.exports = whatIsInAName;
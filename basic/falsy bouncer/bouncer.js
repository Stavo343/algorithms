function bouncer(arr) {
  
  function bool(arr) {
    return Boolean(arr) !== false;
  }

  var filtered = arr.filter(bool);
  return filtered;
}

module.exports = bouncer;
function destroyer(arr) {
  var seekers = [];
  for (i = 0; i < arguments.length; i++) {
    seekers.push(arguments[i]);
  }
  return arr.filter(function (destroy) {
    return seekers.indexOf(destroy) === -1;
  });
  //had to get help with this one (thanks to Rafase282)
}

module.exports = destroyer;
function addTogether(x, y) {
  if (typeof x == "number" && y === undefined) {
      return function(y) {
        if (typeof y == "number") {
          return x + y;
        } else {
          return undefined;
        }
      };
    } else {
      if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
        return arguments[0] + arguments[1];
    }
  }
}

module.exports = addTogether;
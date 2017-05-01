function booWho(bool) {
  switch (bool) {
    case false:
      bool = true;
      break;
    case 0:
      bool = true;
      break;
    case -0:
      bool = true;
      break;
    case null:
      bool = true;
      break;
    case NaN:
      bool = true;
      break;
    case undefined:
      bool = true;
      break;
    case "":
      bool = true;
      break;
    case true:
      bool = true;
      break;
    default:
      bool = false;
  }
  return bool;
}

module.exports = booWho;
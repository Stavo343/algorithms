function sumPrimes(num) {
  
  function prime(x) {
    for (var i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      } 
    } return true;
  }
  
  function culmination(conglomerate, y) {
    return conglomerate + y;
  }
  
  var primes = [];
  
  for (var p = 2; p <= num; p++) {
    if (prime(p) === true) {
      primes.push(p);
    }
  }
  return primes.reduce(culmination);
}

module.exports = sumPrimes;
function sumFibs(num) {
  var larryboy = [1, 1];
  for (var i = 2; larryboy[i - 1] <= num; i++) {
    larryboy.push(larryboy[i - 2] + larryboy[i - 1]);
  }
  larryboy.pop();
  function packOfLies(heap, num) {
    return heap + num;
  }
  larryboy = larryboy.filter(function(whiteLies) {
    return whiteLies % 2 === 1;
  });
  var answer = larryboy.reduce(function packOfLies(heap, num) {
    return heap + num;
  });
  return answer;
}

module.exports = sumFibs;
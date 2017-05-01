function chunkArrayInGroups(arr, size) {
  var answer = [];
  answer.push(arr.slice(0, size));
  for (var i = 1; i < arr.length/size; i++) {
    answer.push(arr.slice(size * i, size * (i + 1)));
  }
  return answer;
}

module.exports = chunkArrayInGroups;

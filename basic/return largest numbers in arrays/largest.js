
/*Original solution for FCC:

function largestOfFour(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].sort(function(x, y) {
      return y - x;
    });
  }
  var largest = [arr[0][0], arr[1][0], arr[2][0], arr[3][0]];
  return largest;
}
*/

//Updated version for arrays longer than a length of 4

function largest(arr) {
  var answer = [];
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].sort(function(x, y) {
      return y-x;
    });
	answer.push(arr[i][0]);
  }
  return answer;
}

module.exports = largest;
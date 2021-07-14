/* Codility - First Unique */

function solution(A) {
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    obj[A[i]] ? obj[A[i]][1]++ : (obj[A[i]] = [i, 1]);
  }

  let minIdx = Infinity;
  let minVal;
  for (let key in obj) {
    if (obj[key][1] === 1) {
      if (minIdx > obj[key][0]) {
        [minIdx, minVal] = [obj[key][0], Number(key)];
      }
    }
  }
  return minVal !== undefined ? minVal : -1;
}

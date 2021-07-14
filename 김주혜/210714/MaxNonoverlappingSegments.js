/* Codility - MaxNonoverlappingSegments */

function solution(A, B) {
  let ropes = [];
  for (let i = 0; i < A.length; i++) {
    ropes.push([A[i], B[i]]);
  }
  ropes.sort((a, b) => a[1] - b[1]);
  let cnt = 0;
  let cur = -1;
  for (let i = 0; i < ropes.length; i++) {
    if (ropes[i][0] > cur) {
      cnt++;
      cur = ropes[i][1];
    }
  }
  return cnt;
}

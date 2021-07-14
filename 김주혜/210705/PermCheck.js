/** 코딜리티 - PermCheck */

function solution(A) {
  A.sort((a, b) => a - b);
  let cur = 0;
  for (let i = 0; i < A.length; i++) {
    if (cur + 1 !== A[i]) return 0;
    cur++;
  }
  return 1;
}

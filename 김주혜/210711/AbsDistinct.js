/* 코딜리티 - AbsDistinct */

function solution(A) {
  let map = new Map();
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) map.set(-A[i], 1);
    else map.set(A[i], 1);
  }
  return map.size;
}

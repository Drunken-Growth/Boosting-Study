/* 코딜리티 L6 - Distinct */

function solution(A) {
  A.sort((a, b) => a - b);
  let map = new Map();
  for (let i = 0; i < A.length; i++) {
    if (!map.get(A[i])) map.set(A[i], 1);
    else map.set(A[i], map.get(A[i]) + 1);
  }
  return map.size;
}

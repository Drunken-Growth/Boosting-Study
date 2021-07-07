/* L10 - MaxSliceSum => 카데인 알고리즘 (DP) */

function solution(A) {
  for (let i = 1; i < A.length; i++) {
    A[i] = Math.max(A[i], A[i - 1] + A[i]);
  }
  return Math.max(...A);
}

// 코딜리티 Lesson3 - PermMissingElem

function solution(A) {
  let cur = 0;
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] > cur + 1) break;
    cur = A[i];
  }
  return cur + 1;
}

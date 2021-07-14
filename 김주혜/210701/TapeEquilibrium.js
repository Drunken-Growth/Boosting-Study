// 코딜리티 Lesson3 - TapeEquilibrium

function solution(A) {
  let total = A.reduce((prev, cur) => prev + cur, 0);
  let min = Infinity;
  let sum = 0;
  for (let i = 0; i < A.length - 1; i++) {
    sum += A[i];
    min = Math.min(min, Math.abs(sum - (total - sum)));
  }
  return min;
}

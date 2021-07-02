// 코딜리티 Lesson2 - CyclicRotation

function solution(A, K) {
  let len = A.length;
  let arr = Array(len).fill(0);
  A.forEach((n, i) => (arr[(i + K) % len] = n));
  return arr;
}

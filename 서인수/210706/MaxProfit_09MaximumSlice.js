// 문제이해
// A배열이 주어잘 때, 가장 큰 원소간 차이(b-a)를 구하는 문제, 단 a의 idx < b의 idx

function solution(A) {
  let min = A[0];
  let result = 0;
  for (let i = 1; i < A.length; i++) {
    min = Math.min(min, A[i]);
    if (A[i] > min) {
      result = Math.max(result, A[i] - min);
    }
  }

  return result;
}

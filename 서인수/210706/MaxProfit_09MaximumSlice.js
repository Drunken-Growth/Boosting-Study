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

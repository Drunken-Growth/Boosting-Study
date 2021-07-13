// 새로 풀이
function solution(A) {
  A.sort((a, b) => a - b);

  if (A[0] !== 1) {
    return 0;
  }

  for (let i = 1; i < A.length; i++) {
    if (A[i] !== A[i - 1] + 1) {
      return 0;
    }
  }
  return 1;
}

// 기존 풀이
function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) return 0;
  }
  return 1;
}

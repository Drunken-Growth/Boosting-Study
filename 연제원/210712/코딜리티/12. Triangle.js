// 새로 풀이
function solution(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length - 2; i++) {
    const P = A[i];
    const Q = A[i + 1];
    const R = A[i + 2];
    if (P + Q > R && Q + R > P && R + P > Q) {
      return 1;
    }
  }
  return 0;
}

// 기존 풀이
function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    if (A[i + 2] < A[i] + A[i + 1]) {
      return 1;
    }
  }

  return 0;
}

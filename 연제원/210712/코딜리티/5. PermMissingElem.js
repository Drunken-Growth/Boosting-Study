// 새로 풀이
function solution(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i <= A.length; i++) {
    if (i + 1 !== A[i]) {
      return i + 1;
    }
  }
}

// 기존 풀이
function solution(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i <= A.length; i++) {
    if (A[i] !== i + 1) return i + 1;
  }
}

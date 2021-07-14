// vert Easy 다시풀 필요 없을 듯

// 문제이해
// A가 1부터 연속된 값을 가지고 있는 지여 부를 판별하는 문제

// 문제접근
// sort 하여 idx와 A[i]를 비교하며 판별하는 것

function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) return 0;
  }

  return 1;
}

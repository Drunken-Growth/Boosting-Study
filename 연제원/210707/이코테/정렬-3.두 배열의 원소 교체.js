// 문제

// 두 개의 배열 A, B가 있을 때 각각 N개의 원소로 구성되어 있다.
// 최대 K번 바꿔치기를 수행할 수 있다.
// 배열 A의 모든 원소의 합이 최대가 되도록 한다.

// A는 오름차순으로
// B는 내림차순으로 정렬
function solution(N, K, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < K; i++) {
    if (A[i] < B[i]) {
      [A[i], B[i]] = [B[i], A[i]];
    } else {
      break;
    }
  }
  return A.reduce((acc, cur) => acc + cur);
}

console.log(solution(5, 3, [1, 2, 5, 4, 3], [5, 5, 6, 6, 5])); // 26

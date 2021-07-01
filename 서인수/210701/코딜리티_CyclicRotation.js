// 풀이방법
// 1. 이동해야하는 횟수(move)는 A.length를 K로 나눈 나머지 만큼이다.
// 2. 현재 값은 (현재 idx + move) / A.length 로 이동하여야한다.
// 3. A를 순회하며 현재값을 각요소의 값을 바꾸어준다.

function solution(A, K) {
  let movedA = A.slice();
  let move = K % A.length;

  for (let i = 0; i < A.length; i++) {
    movedA[(i + move) % A.length] = A[i];
  }

  return movedA;
}

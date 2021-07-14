// Easy -> 조금 헷갈리긴 했지만 언제 풀어도 풀 수 있으므르 다시 안풀어도 됨.

// 문제이해
// A배열의 요소들을 K만큼 오른쪽으로 이동시키려고 한다.
// 오른쪽으로 K번 옮겼을 때의 배열을 구하여라

// 문제풀이
// 1번 움직였을 때 상황을 계산한다.
// A를 복사하여, 원래 값을 기억하도록 하고,
// A[i]번째 값은 copyA의 i + move의 깂이 된다.

// 단 i+move > A.length 일 때는 해당길이로 나눠준 나머지로 자리idx를 지정한다.

function solution(A, K) {
  let copyA = Array(A.length).fill(0);
  let move = K % A.length;

  for (let i = 0; i < A.length; i++) {
    copyA[(i + move) % A.length] = A[i];
  }

  return copyA;
}

function solution(A, K) {
  if (A.length === K || A.length === 0) return A;

  for (let i = 0; i < K; i++) {
    A.unshift(A.pop());
  }

  return A;
}

/**
 * 1. 배열의 맨 마지막 요소를 맨 앞으로 옮긴다.
 * 2. 배열의 길이와 K가 같으면 그대로 리턴한다.
 */

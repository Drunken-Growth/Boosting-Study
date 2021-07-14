function solution(A) {
  const visited = Array.from({ length: A.length }).map((v) => false);
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (visited[A[i] - 1] === false) {
      visited[A[i] - 1] = true;
      count += 1;
    }
  }

  return count === A.length ? 1 : 0;
}

/**
 * 문제 파악
 * 0. 시간 복잡도: O(n)
 * 1. 순열은 각 요소가 1번씩만 포함된다.
 * 2. 순열이 아니라면, 0을 반환?
 * 3. 순열일 경우, 1을 반환?
 */

function solution(A) {
  if (Math.max(...A) < 1) return 1;

  const visited = Array.from({ length: A.length }).map((v) => false);

  for (let i = 0; i < A.length; i++) {
    if (visited[A[i] - 1] === false) {
      visited[A[i] - 1] = true;
    }
  }

  const checkFalse = visited.indexOf(false);

  return checkFalse === -1 ? A.length + 1 : checkFalse + 1;
}

/**
 * 문제 파악
 * 0. 가장 큰 요소가 1보다 작으면 1을 리턴한다.
 * 1. 양수로 이루어진 배열(0보다 큰)이 주어진다.
 * 2. 순서대로 갈 때, 포함되지 않은 요소를 찾는다.
 * 4. 만약 다 있으면 끝 요소 + 1
 * 5. 시간 복잡도: O(n)
 */

function solution(A) {
  A.sort((a, b) => b - a);

  const candidate1 = A[0] * A[1] * A[2];
  const candidate2 = A[0] * A[A.length - 1] * A[A.length - 2];

  return Math.max(candidate1, candidate2);
}

/**
 * 문제 파악
 * 1. 최소 3개 이상의 배열이 주어진다.
 * 2. 배열을 나란히 곱했을 때 가장 큰 수를 반환한다.
 * 3. 내림차순으로 정렬한 후에, 맨 앞에 3개 또는 앞에 하나 맨뒤에 두개중에
 * 4. 가장 큰 수가 있을 확률이 높다.
 * 5. 두 값을 구하고 그 중에서 큰 것을 반환한다.
 */

function solution(A) {
  A = A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i += 2) {
    if (A[i] !== A[i + 1]) {
      return A[i];
    }
  }
}

/**
 * 0. 시간 복잡도: O(n) 미만 => for loop보다 더 효율적인 알고리즘 필요
 * 1. 홀수 요소가 주어지고, 각 요소들은 쌍을 이룬다.
 * 2. 쌍을 이루지못한 요소를 반환한다.
 * 3. 정렬을 한다 => [3, 3, 7, 9, 9, 9, 9] 또는 [3, 3, 9, 9, 9, 9, 10]이 될 수도 있음.
 * 4. 무조건 짝을 이루기 때문에 정답은 홀수 인덱스에 있다. 이 점을 활용
 */

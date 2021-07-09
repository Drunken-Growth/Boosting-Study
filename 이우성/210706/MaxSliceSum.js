function solution(A) {
  let N = A.length;
  let frontArr = Array.from({ length: N }).map((v) => 0);
  let backArr = Array.from({ length: N }).map((v) => 0);

  let curSum = 0;

  for (let i = 0; i < N; i++) {
    if (A[i] + curSum > 0) {
      frontArr[i] = A[i] + curSum;
      curSum = A[i] + curSum;
    } else {
      frontArr[i] = A[i] + curSum;
      curSum = 0;
    }
  }

  curSum = 0;

  for (let i = N - 1; i > -1; i--) {
    if (A[i] + curSum > 0) {
      backArr[i] = A[i] + curSum;
      curSum = A[i] + curSum;
    } else {
      backArr[i] = A[i] + curSum;
      curSum = 0;
    }
  }
  // console.log("front", frontArr);
  // console.log("back", backArr);

  let max = Math.max(...A);

  for (let i = 0; i < N - 1; i++) {
    if (max < frontArr[i] + backArr[i + 1]) {
      max = frontArr[i] + backArr[i + 1];
    }
  }

  return max;
}

console.log(solution([3, 2, -6, 4, 0])); // 5
console.log(solution([10])); // 10
console.log(solution([-2, 1])); // 1
console.log(solution([-2, -2])); // -2

/**
 * 문제 파악
 * 1. 가장 높은 값을 반환한다.
 * 2. A = [3, 2, -6, 4, 0] return 5
 * 3. 구간 합을 구하는 문제
 *
 * 수도 코드
 * 1. 시간 복잡도 O(n^2) 미만
 * 2. 처음부터 끝까지 합을 더한다. 만약 합이 0 미만이면 초기화하고 다시 더한다.
 * 3. 뒤에서부터 합을 더한다. 마찬가지로 0 미만이 되면 초기화하고 다시 더한다.
 * 4. 두 배열을 i + (i + 1) > max 큰지 검사한다. 이후 max값을 반환한다.
 */

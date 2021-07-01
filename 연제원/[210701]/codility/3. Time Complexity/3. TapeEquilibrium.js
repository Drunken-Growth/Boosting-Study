// A non-empty array A consisting of N integers is given.
// Array A represents numbers on a tape.

// Any integer P, such that 0 < P < N,
// splits this tape into two non-empty parts:
// A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

// The difference between the two parts is the value of:
// |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

// In other words,
// it is the absolute difference between the sum of the first part and the sum of the second part.

// 문제
// A 배열은 N개의 정수로 구성되어있다. (빈 배열 X)
// P가 있을 때 (0 < P < N)
// 이를 기준으로 나눠 각 배열의 합의 차이들 중 가장 작은 수를 구해라!
// => |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

// 풀이
// slice로 나눠서 각 배열의 합의 차이를 구하면 시간초과!

function solution(A) {
  let leftSum = A[0];
  let rightSum = A.slice(1).reduce((acc, cur) => acc + cur);
  let answer = Math.abs(leftSum - rightSum);

  for (let i = 1; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];
    answer = Math.min(answer, Math.abs(leftSum - rightSum));
  }

  return answer;
}

console.log(solution([3, 1, 2, 4, 3])); // 1

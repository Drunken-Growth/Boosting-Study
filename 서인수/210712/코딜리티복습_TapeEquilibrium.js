// veryEasy 다시안풀어도됨
// 처음풀었을 때와 같은 로직이지만 더 깔끔하게 작성하였다.

// 문제이해
// A배열에서 i번째전까지의 합과 i번째부터의 합의 최소차이를 구하는 문제

// 문제접근
// O(n^2)은 불가하다.
// A의 총 합을 구하고 A를 순회하며 left값을 구한다.
// right값과 비교하여 모든 경우에서의 차이를 구하고 최소값을 리턴하도록 한다.

function solution(A) {
  let sum = A.reduce((acc, cur) => acc + cur);
  let left = 0;
  let right = 0;
  let min = 987654321;
  for (let i = 1; i < A.length; i++) {
    left += A[i - 1];
    right = sum - left;
    min = Math.min(min, Math.abs(right - left));
  }

  return min;
}

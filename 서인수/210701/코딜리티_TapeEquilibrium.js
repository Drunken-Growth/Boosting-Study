// 첫시도 O(N^2)으로 실패

// 풀이방법
// 0. A를 순회한다.
// 1. left 는 A[i-1]의 누적합이다.
// 2. right 는 A의 총 합에서 left를 뺀 값이다.
// 3. 둘이 차이의 절대값을 구하고, 그 중 최소값을 기록하도록 한다.
// left와 right를 구하는 것 모두 O(N)으로 가능해진다.

function solution(A) {
  let sum = A.reduce((acc, cur) => acc + cur);

  let min = 9999999;
  let left = 0;
  let right = sum;
  for (let i = 1; i < A.length; i++) {
    left += A[i - 1];
    right -= A[i - 1];
    console.log([left, right]);
    let diff = Math.abs(right - left);
    min = Math.min(min, diff);
  }

  return min;
}

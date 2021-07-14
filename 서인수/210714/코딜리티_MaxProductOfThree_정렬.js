// 문제접근
// 1. 가장 큰 수는 어떤 경우에라도 들어감
// 2. 나머지 두개의 숫자는 오름차순정렬했을 때 앞의 두개의 곱과 내림차순 정렬했을 때 2,3번째 수의 곱 중 큰 것으로 선택

//3. 모두 음수인 경우 예외처리
// 내림차순 후 가장 큰 숫자 3개 선택
function solution(A) {
  A.sort((a, b) => b - a);
  let max = A[0];
  if (max < 0) return A[0] * A[1] * A[2];
  let positive = A[1] * A[2];

  A.sort((a, b) => a - b);
  let negative = A[0] * A[1];

  return max * Math.max(positive, negative);
}

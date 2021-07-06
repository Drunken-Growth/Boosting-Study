/* 코딜리티 L6 - MaxProductOfThree 
  1. 오름차순 정렬
  2. 더 큰 값 리턴
    2-1. 앞쪽 음수 2개 * 맨뒤 1개
    2-2. 맨뒤 3개
*/

function solution(A) {
  A.sort((a, b) => a - b);
  let len = A.length;
  return Math.max(
    A[0] * A[1] * A[len - 1],
    A[len - 1] * A[len - 2] * A[len - 3]
  );
}

/* 코딜리티 L9 - MaxDoubleSliceSum 
  1. -> 방향 누적합배열 & <- 방향 누적합배열 생성
  1-1. 왼쪽부터 (첫요소 빼고) 누적합 구하기
  1-2. 오른쪽부터 (첫요소 빼고) 누적합 구하기
    - 누적합이 음수가 되면 0으로 초기화해버리기 (연속 3개 골라버리면 최소 0은 되니까) 
  2. 1개 가운데 두고 더했을 때 최댓값 찾아서 리턴
*/

function solution(A) {
  let left = Array(A.length).fill(0);
  let right = Array(A.length).fill(0);

  for (let i = 1; i < A.length; i++) {
    left[i] = Math.max(0, left[i - 1] + A[i]);
  }
  for (let i = A.length - 1; i >= 0; i--) {
    right[i - 1] = Math.max(0, right[i] + A[i - 1]);
  }
  let max = 0;
  for (let i = 1; i < A.length - 1; i++) {
    max = Math.max(max, left[i - 1] + right[i + 1]);
  }
  return max;
}

// [-8, 10, 20, -5, -7, -4] // 30
// [5, 5, 5] // 5
// [-2, -3, -4, 1, -5, -6, -7] // -1

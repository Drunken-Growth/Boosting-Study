/* 코딜리티 L5 - PassingCars */

function solution(A) {
  let [sum, cnt] = [0, 0];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) cnt++;
    else sum += cnt;
    if (sum > 1000000000) return -1;
  }
  return sum;
}

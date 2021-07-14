/* L10 - MaxProfit => 카데인 알고리즘 (DP)
 */

function solution(A) {
  let arr = [];
  for (let i = 0; i < A.length - 1; i++) {
    arr.push(A[i + 1] - A[i]);
  }
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i - 1] + arr[i]);
  }
  let max = Math.max(...arr);
  return max < 0 ? 0 : max;
}

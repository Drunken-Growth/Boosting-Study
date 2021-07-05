// N < 100,000 이므로
// O(N^2)으로는 완전탐색 불가

// memoization
// 1. i번째 idx 까지의 합을 모두 구한다.
function solution(A) {
  let result = [];

  let memo = [];
  function accSum(idx) {
    if (idx === 0) return A[0];
    if (memo[idx]) return memo[idx];

    memo[idx] = A[idx] + accSum(idx - 1);
    return A[idx] + accSum(idx - 1);
  }

  let min = 999999;
  let s = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      let value;
      if (i === j) continue;
      if (i === 0) {
        value = accSum(j) / (j + 1);
      } else {
        value = (accSum(j) - accSum(i - 1)) / (j - i + 1);
      }
      // console.log([i,j,value])
      if (value < min) {
        s = i;
        min = value;
      }
    }
  }
  //     console.log(s)
  //    console.log(result)
  return s;
  // console.log( accSum(endIdx)- accSum(startIdx - 1) / end-start+1)
  // console.log((accSum(2) - accSum(0))/ 2)
  // console.log((accSum(4)- accSum(2)) / 2)
  // console.log((accSum(4)- accSum(0)) / 4)
}

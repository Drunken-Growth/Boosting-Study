// 이코테 DP - 개미전사

function solution(n, arr) {
  let memo = Array(n).fill(0);
  memo[0] = arr[0];
  memo[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < n; i++) {
    memo[i] = Math.max(arr[i] + memo[i - 2], memo[i - 1]);
  }
  return memo[n - 1];
}

console.log(solution(4, [1, 3, 1, 5]));
console.log(solution(7, [1, 3, 1, 5, 6, 1, 7]));

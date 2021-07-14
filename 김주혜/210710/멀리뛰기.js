/* 프로그래머스 - 멀리뛰기 (DP) */

function solution(n) {
  let dp = Array(n + 1).fill(0);
  [dp[1], dp[2]] = [1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

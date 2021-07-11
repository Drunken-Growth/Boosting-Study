/* 프로그래머스 - 올바른 괄호 개수 (DP, 카탈란 수) */

function solution(n) {
  let dp = [0, 1];
  factorial(2 * n);
  return Math.ceil(dp[2 * n] / (dp[n] * dp[n + 1]));

  function factorial(num) {
    for (let i = 2; i <= num; i++) {
      dp[i] = dp[i - 1] * i;
    }
  }
}

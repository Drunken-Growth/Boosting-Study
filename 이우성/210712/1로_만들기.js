function solution(x) {
  const dp = Array.from({ length: x + 1 }, () => 0);

  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    if (i % 5 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 5] + 1);
    }
  }

  return dp[x];
}

console.log(solution(26)); // 3

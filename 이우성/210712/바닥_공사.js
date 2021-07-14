function solution(N) {
  const dp = Array.from({ length: N + 1 }, () => 0);

  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i < N + 1; i++) {
    dp[i] = dp[i - 1] + ((dp[i - 2] * 2) % 796796);
  }
  console.log(dp);
  return dp[N];
}

console.log(solution(3)); // 5

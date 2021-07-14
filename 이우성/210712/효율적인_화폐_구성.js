function solution(N, M, coins) {
  const dp = Array.from({ length: M + 1 }, () => 10001);

  // 초기값
  dp[0] = 0;

  for (let i = 1; i < M + 1; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  // console.log(dp);
  return dp[M] !== 10001 ? dp[M] : -1;
}

console.log(solution(2, 15, [2, 3])); // 5
console.log(solution(3, 4, [3, 5, 7])); // -1

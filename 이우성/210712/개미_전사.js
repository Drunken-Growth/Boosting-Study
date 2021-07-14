function solution(n, foods) {
  const dp = Array.from({ length: n }, () => 0);

  dp[0] = foods[0];
  dp[1] = Math.max(foods[0], foods[1]);

  for (let i = 2; i < foods.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + foods[i]);
  }

  console.log(dp);
  return dp[n - 1];
}

console.log(solution(4, [1, 3, 1, 5])); // 8

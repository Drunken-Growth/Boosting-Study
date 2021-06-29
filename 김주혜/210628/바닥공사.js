// 이코테 DP - 바닥공사

function solution(n) {
  let memo = Array(n).fill(0);
  [memo[0], memo[1]] = [1, 3];

  for (let i = 2; i < n; i++) {
    memo[i] = 2 * memo[i - 2] + memo[i - 1];
  }
  return memo[n - 1];
}

console.log(solution(3)); // 5
console.log(solution(4)); // 11
console.log(solution(5)); // 21

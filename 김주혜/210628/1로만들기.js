// 이코테 DP - 1로만들기

function solution(n) {
  let memo = Array(30001).fill(0);

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + 1;
    if (i % 2 === 0) {
      memo[i] = Math.min(memo[i], memo[parseInt(i / 2)] + 1);
    } else if (i % 3 === 0) {
      memo[i] = Math.min(memo[i], memo[parseInt(i / 3)] + 1);
    } else if (i % 5 === 0) {
      memo[i] = Math.min(memo[i], memo[parseInt(i / 5)] + 1);
    }
  }
  return memo[n];
}

let input = 26;
console.log(solution(input));

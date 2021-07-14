// 이코테 DP - 효율적인 화폐 구성
function solution(n, m, arr) {
  let memo = Array(m).fill(10001);
  arr.forEach((num) => {
    memo[num - 1] = 1;
  });

  for (let i = 2; i < m; i++) {
    let min = 10001;
    for (let j = 0; j < parseInt((i + 1) / 2); j++) {
      min = Math.min(memo[j] + memo[i - j - 1], min, memo[i]);
    }
    memo[i] = min;
  }

  if (memo[m - 1] > 10000) return -1;
  else return memo[m - 1];
}

console.log(solution(2, 15, [2, 3])); // 5
console.log(solution(2, 20, [2, 3])); // 7
console.log(solution(3, 4, [3, 5, 7])); // -1

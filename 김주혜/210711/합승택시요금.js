/* 프로그래머스 - 합승 택시 요금 */

function solution(n, s, a, b, fares) {
  let arr = Array(n + 1).fill(0);
  arr = arr.map((_) => Array(n + 1).fill(Infinity));
  fares.forEach((fare) => {
    let [from, to, cost] = fare;
    arr[from][to] = cost;
    arr[to][from] = cost;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i === j) arr[i][j] = 0;
        else arr[i][j] = Math.min(arr[i][j], arr[i][k] + arr[k][j]);
      }
    }
  }

  let min = Infinity;
  for (let k = 1; k <= n; k++) {
    min = Math.min(min, arr[k][s] + arr[k][a] + arr[k][b]);
  }
  return min;
}

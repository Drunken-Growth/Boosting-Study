function solution(n, results) {
  let arr = fillArr();
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      if (arr[a][b] === 1) {
        for (let k = 1; k <= n; k++) {
          if (arr[b][k] === 1) {
            [arr[a][k], arr[k][a]] = [1, -1];
          }
        }
      }
      if (arr[a][b] === -1) {
        for (let k = 1; k <= n; k++) {
          if (arr[b][k] === -1) {
            [arr[a][k], arr[k][a]] = [-1, 1];
          }
        }
      }
    }
  }
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    let cnt = 0;
    for (let j = 1; j <= n; j++) {
      if (arr[i][j] !== 0) cnt++;
    }
    if (cnt === n - 1) ans++;
  }
  return ans;

  function fillArr() {
    let arr = Array(n + 1).fill(0);
    arr = arr.map((_) => Array(n + 1).fill(0));
    for (let i = 0; i < results.length; i++) {
      let [win, lose] = results[i];
      [arr[win][lose], arr[lose][win]] = [1, -1];
    }
    return arr;
  }
}

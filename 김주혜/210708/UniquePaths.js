/* 리트코드 62. Unique Paths */

var uniquePaths = function (m, n) {
  let path = Array(m)
    .fill()
    .map((_) => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      path[i][j] = path[i - 1][j] + path[i][j - 1];
    }
  }
  return path[m - 1][n - 1];
};

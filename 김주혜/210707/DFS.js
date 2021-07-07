/*  해커랭크 - DFS(그래프) */

function maxRegion(grid) {
  let max = 0;
  let cnt = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        cnt = 1;
        grid[i][j] = 0;
        dfs(i, j);
        max = Math.max(max, cnt);
      }
    }
  }
  return max;

  // check left, right, top, bottom
  function dfs(x, y) {
    let moves = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ];
    let ables = [];
    for (let i = 0; i < 8; i++) {
      let [nx, ny] = [x + moves[i][0], y + moves[i][1]];
      if (grid[nx] && grid[nx][ny] === 1) {
        cnt++;
        grid[nx][ny] = 0;
        ables.push([nx, ny]);
      }
    }
    if (!ables.length) return;
    for (let i = 0; i < ables.length; i++) {
      dfs(ables[i][0], ables[i][1]);
    }
  }
}

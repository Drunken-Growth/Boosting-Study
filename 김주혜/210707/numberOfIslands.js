// 리트코드 - 200. Number Of Islands

var numIslands = function (grid) {
  let cnt = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] = "2";
        let Q = [[i, j]];
        while (Q.length) {
          let [x, y] = Q.shift();
          Q.push(...filterV(x, y));
        }
        cnt++;
      }
    }
  }
  return cnt;

  // 오른쪽, 아래가 1인지 확인
  function filterV(x, y) {
    let ables = [];
    let moves = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    for (let i = 0; i < 4; i++) {
      let nx = x + moves[i][0];
      let ny = y + moves[i][1];
      if (grid[nx] && grid[nx][ny] === "1") {
        ables.push([nx, ny]);
        grid[nx][ny] = "2";
      }
    }
    return ables;
  }
};

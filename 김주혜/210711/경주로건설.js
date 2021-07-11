/* 프로그래머스 - 경주로건설 (DFS) */

function solution(board) {
  let minCost = Infinity;
  let size = board.length;
  board[0][0] = -Infinity;
  dfs(0, 0, "first", 0);
  return minCost;

  // params : i, j, 이전방향, 누적비용
  function dfs(x, y, prevDir, cost) {
    if (minCost <= cost) return;
    if (x === size - 1 && y === size - 1) {
      minCost = Math.min(minCost, cost);
      return;
    }
    let dirs = [
      ["right", 0, 1],
      ["bottom", 1, 0],
      ["left", 0, -1],
      ["top", -1, 0],
    ];
    let canMove = false;
    for (let i = 0; i < 4; i++) {
      const [dir, dx, dy] = dirs[i];
      const [nx, ny] = [x + dx, y + dy];
      if (board[nx] && board[nx][ny] !== undefined) {
        if (prevDir === dir || prevDir === "first") {
          if (board[nx][ny] === 0 || board[nx][ny] >= cost + 100) {
            board[nx][ny] = cost + 100;
            dfs(nx, ny, dir, cost + 100, board);
          }
        } else {
          if (board[nx][ny] === 0 || board[nx][ny] >= cost + 600) {
            board[nx][ny] = cost + 600;
            dfs(nx, ny, dir, cost + 600);
          }
        }
        canMove = true;
      }
    }
    if (!canMove) return;
  }
}

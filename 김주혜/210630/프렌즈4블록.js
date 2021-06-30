/* 프로그래머스 - 프렌즈 4블록
하아..
 */

function solution(m, n, board) {
  board = board.map((el) => el.split(""));
  let total = 0;
  let cnt = 0;
  let remove = [];
  while (true) {
    cnt = 0;
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (board[i] && board[i][j] && findBlock(board[i][j], i, j)) {
          dfs(board[i][j], i, j);
        }
      }
    }
    if (remove.length === 0) break;
    removeBlock(remove, board);
    remove = [];
    total = countRemoveBlock();
  }
  return total;

  // 지워진 블록개수 세기
  function countRemoveBlock() {
    let count = 0;
    for (let i = 0; i < m; i++) {
      count += board[i].filter((el) => !el).length;
    }
    return count;
  }

  // 지우고 한칸씩 내리는 함수
  function removeBlock(list, board) {
    list.forEach((el) => (board[el[0]][el[1]] = false));
    for (let i = m - 1; i > 0; i--) {
      for (let j = 0; j <= n - 1; j++) {
        if (board[i][j] === false) {
          for (let k = i - 1; k >= 0; k--) {
            if (board[k] && board[k][j]) {
              [board[i][j], board[k][j]] = [board[k][j], board[i][j]];
              break;
            }
          }
        }
      }
    }
  }

  // 지울 블록 dfs탐색
  function dfs(block, i, j) {
    if (i >= m - 1 || j >= n - 1 || !block || !findBlock(block, i, j)) return;
    dfs(block, i + 1, j + 1);
    remove.push([i, j], [i, j + 1], [i + 1, j], [i + 1, j + 1]);
  }

  // 4블록여부 확인
  function findBlock(block, i, j) {
    if (
      i < m - 1 &&
      j < n - 1 &&
      block === board[i][j + 1] &&
      block === board[i + 1][j] &&
      block === board[i + 1][j + 1]
    ) {
      return true;
    }
    return false;
  }
}

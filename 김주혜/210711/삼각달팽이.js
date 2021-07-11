/* 프로그래머스 - 삼각달팽이 (구현) */

function solution(n) {
  const arr = makeArr();
  arr[0][0] = 1;
  let num = 2;

  let [i, j] = [0, 0];
  while (true) {
    let canMove = true;
    canMove = move("down");
    canMove = move("right");
    canMove = move("diag");
    if (!canMove) break;
  }

  const ans = [];
  arr.forEach((el) => ans.push(...el));
  return ans;

  function move(dir) {
    const dirs = { down: [1, 0], right: [0, 1], diag: [-1, -1] };
    let [dx, dy] = dirs[dir];
    let canMove = false;
    while (arr[i + dx] && arr[i + dx][j + dy] === -1) {
      [i, j] = [i + dx, j + dy];
      arr[i][j] = num;
      num++;
      canMove = true;
    }
    return canMove;
  }

  function makeArr() {
    let arr = Array(n).fill(0);
    arr = arr.map((_, i) => Array(i + 1).fill(-1));
    return arr;
  }
}

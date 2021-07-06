function solution(block, board) {
  let max = 0;
  const blocks = {
    0: [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    1: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    2: [
      [0, 0],
      [1, 0],
      [1, 1],
    ],
    3: [
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    4: [
      [0, 0],
      [0, 1],
      [1, 1],
    ],
    5: [
      [0, 0],
      [0, 1],
      [1, 0],
    ],
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let [able, newBoard] = isAble(i, j);
      if (able) max = Math.max(max, countRemoveLine(newBoard));
    }
  }
  return max;

  // board 순회하며, 가능한 곳 모두 찾기 (i, j를 0, 0 지점으로 가정)
  // 가능한 곳 = 해당블록 바로 아래가 하나라도 1) 바닥이거나 2) 1이여야함
  function isAble(i, j) {
    let newBoard = copyBoard(board);
    let collision = false;
    for (let k = 0; k < 3; k++) {
      let [x, y] = blocks[block][k];
      if (
        board[i + x] === undefined ||
        board[i + x][j + y] === undefined ||
        board[i + x][j + y] === 1
      ) {
        return [false, null];
      } else newBoard[i + x][j + y] = 1;

      if (
        board[i + x + 1] === undefined ||
        (board[i + x + 1] && board[i + x + 1][j + y] === 1)
      ) {
        collision = true;
      }
    }
    if (!collision) return [false, null];
    return [true, newBoard];
  }

  // 자리 확정후, 가로가 다 1인 줄 개수 세기 => 몇 줄 없어지는지 리턴
  function countRemoveLine(board) {
    let cnt = 0;
    for (let i = 0; i < board.length; i++) {
      let isOne = true;
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] !== 1) isOne = false;
      }
      if (isOne) cnt++;
    }
    return cnt;
  }

  function copyBoard(board) {
    let newBoard = [];
    for (let i = 0; i < board.length; i++) {
      newBoard.push([...board[i]]);
    }
    return newBoard;
  }
}

console.log(
  solution(0, [
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 1],
  ])
); // 2

console.log(
  solution(0, [
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 0, 1, 1],
  ])
); // 1

console.log(
  solution(1, [
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 1],
  ])
); // 1

console.log(
  solution(2, [
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 1],
  ])
); // 1

console.log(
  solution(0, [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 1],
  ])
); // 3

console.log(
  solution(3, [
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 1],
  ])
); // 1

console.log(
  solution(4, [
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 1],
  ])
); // 2

console.log(
  solution(5, [
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 1],
  ])
); // 0

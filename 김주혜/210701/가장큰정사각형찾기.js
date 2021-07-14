/** 프로그래머스 - 가장 큰 정사각형 찾기
 *  1. board 순회하며 값 갱신
 *      - 2*2 사각형에서 오른쪽 아래값 갱신
 *      -> 나머지 3개 값중에 제일작은거 + 1
 *      ex.
 *      1 0 1  =>  1 0 1
 *      1 1 1      1 1 1
 *      1 1 1      1 2 2
 *
 *  2. 갱신후, 가장큰 값을 제곱해서 리턴
 */

function solution(board) {
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j]) {
        board[i][j] =
          Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;
      }
    }
  }
  let max = 0;
  board.forEach((row) => row.forEach((n) => (max = Math.max(n, max))));
  return Math.pow(max, 2);
}

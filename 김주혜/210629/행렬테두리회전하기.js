/* 프로그래머스 - 행렬테두리 회전하기

  1. row,col 이용해서 1~row*col값이 채워진 행렬 생성
    => makeMatrix()
  2. queries 요소들을 순회하며 회전시킴
    => rotate()
    2-1. 회전 시키면서 테두리 최소값확인 (min)
    2-2. 테두리 위쪽, 오른쪽, 아래쪽, 왼쪽 순서로 회전시키며 값 할당
         (하나씩 밀리는것 고려해 last 변수 사용)
 */

function solution(rows, columns, queries) {
  let answer = [];
  let matrix = makeMatrix(rows, columns);
  queries.forEach((query) => rotate(query));
  return answer;

  function rotate(query) {
    let min = rows * columns;
    let [sy, sx, ey, ex] = query.map((el) => el - 1);
    let last = matrix[sy][sx];
    for (let i = sx + 1; i <= ex; i++) {
      min = Math.min(min, last);
      [matrix[sy][i], last] = [last, matrix[sy][i]];
    }
    for (let i = sy + 1; i <= ey; i++) {
      min = Math.min(min, last);
      [matrix[i][ex], last] = [last, matrix[i][ex]];
    }
    for (let i = ex - 1; i >= sx; i--) {
      min = Math.min(min, last);
      [matrix[ey][i], last] = [last, matrix[ey][i]];
    }
    for (let i = ey - 1; i >= sy; i--) {
      min = Math.min(min, last);
      [matrix[i][sx], last] = [last, matrix[i][sx]];
    }
    answer.push(min);
  }

  function makeMatrix(row, col) {
    let arr = [];
    for (let i = 0; i < row; i++) {
      let tmp = [];
      for (let j = 1; j <= col; j++) {
        tmp.push(col * i + j);
      }
      arr.push(tmp);
    }
    return arr;
  }
}

//1차 실패
// 현재 블록에서 제거하는 블록의 개수를 구하는것 ok
// 블록제거후 보드 변경 실패

//문제 이해
// 2x2로 같은 블록일 경우 제거되고, 제거된 블록의 개수를 찾는문제
// 제거 되면, 위에 있던 블록이 아래로 내려와 쌓이고, 다시 제거하는 과정이 반복된다.

//접근
// 지워지는 기능의 함수(delete)와 지운자리를 채우며 보드를 갱신하는 함수를 만들어 반복하면 되지 않을까..
// 완벽히 생각안나 바로 디버깅하며 풀어보기로 도전

function solution(m, n, board) {
  let cnt = 0;
  let board2 = board.map((el) => el.split(""));
  console.log(board2);
  let remove = [];

  function checkBlock(value, y, x) {
    // 2x2 같은 블록 찾아서 remove 배열에 해당 좌표 넣기 [x,y]
    if (y > m - 2 || x > n - 2) {
      return;
    }
    let right = board2[y][x + 1];
    let below = board2[y + 1][x];
    let cross = board2[y + 1][x + 1];

    let up = y > 0 && board[y - 1][x];
    let rightUp = y > 0 && board[y - 1][x + 1];
    if (value === right && value === below && value === cross) {
      remove.push([x, y]);
      remove.push([x + 1, y]);
      remove.push([x, y + 1]);
      remove.push([x + 1, y + 1]);

      board2[y][x] = 0;
      board2[y][x + 1] = 0;
      board2[y + 1][x] = 0;
      board2[y + 1][x + 1] = 0;
      // 블록 제거하고 윗블록 내리기
      board2[y + 1][x] = up;
      board2[y + 1][x + 1] = rightUp;

      // y > 0 && (board[y-1][x] = 0)
      // y > 0 && (board[y-1][x+1] = 0)
    }
  }

  board2.map((el, i) =>
    el.map((el2, j) => {
      checkBlock(el2, i, j);
    })
  );

  // remove 배열에서 중복 된 블록 처리해주고, 제거된 블록의 개수 올리기
  let hash = {};

  for (let i = 0; i < remove.length; i++) {
    let key = remove[i];
    if (!hash[key]) {
      hash[key] = 1;
    } else {
      hash[key] += 1;
    }
  }

  cnt += Object.keys(hash).length;
  hash = {};

  console.log(remove);
  console.log(hash);
  console.log(board2);

  return cnt;
}

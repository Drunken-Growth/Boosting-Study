// 문제

// "Dummy"라는 도스 게임이 있다. 뱀이 기어다니다가 벽, 자기 자신의 몸과 부딪히면 게임이 끝난다.

// 게임은 N x N 정사각 보드 위에서 진행되고, 몇몇 칸에서 사과가 놓여져 있다.
// 보드의 상항좌우 끝에는 벽이 있다. 게임을 시작할 때 뱀은 맨 위 맨 좌측에 위치하고 뱀의 길이는 1이다.
// 뱀은 매 초마다 이동을 하는 데 다음과 같은 규칙을 따른다.

// * 먼저 뱀은 몸길이를 늘려 머리를 다음 칸에 위치 시킨다.
// * 만약 이동한 칸에 사과가 있다면, 그 칸에 있던 사과가 없어지고 꼬리는 움직이지 않는다.
// * 만약 이동한 칸에 사과가 없다면, 몸길이를 줄여서 꼬리가 위치한 칸을 비워준다. 즉, 몸길이는 변하지 않는다.

// 사과의 위치와 뱀의 이동경로가 주어질 때, 이 게임이 몇 초에 끝나는 지 계산하라.

// 입력
// N : 보드 크기
// K : 사과 개수 + 사과 들의 위치 : (행, 렬)
// L : 뱀의 방향 변환 횟수 + 뱀의 방향 변환 정보 (X, C) => X초가 끝난 뒤에 C 방향("L" : 왼쪽, "D" : 오른쪽)으로 회전한다.

// 뱀을 큐로 해야할 듯?
function solution(N, apples, direction) {
  const board = Array(N)
    .fill(0)
    .map(() => Array(N).fill(0));
  apples.forEach(([row, col]) => (board[row - 1][col - 1] = "apple"));

  // 오른쪽, 아래, 왼쪽, 위
  const row = [0, 1, 0, -1];
  const col = [1, 0, -1, 0];

  const snake = [[0, 0]];
  board[0][0] = 1; // 뱀 몸통이 있는 곳을 1
  let current_direction = 0; // => row[0], col[0]
  let time = 0;

  while (true) {
    const [current_head_row, current_head_col] = snake[0];
    const next_row = current_head_row + row[current_direction];
    const next_col = current_head_col + col[current_direction];

    // 벽 안
    if (
      next_row >= 0 &&
      next_row < N &&
      next_col >= 0 &&
      next_col < N &&
      board[next_row][next_col] !== 1
    ) {
      // 빈 공간
      if (board[next_row][next_col] === 0) {
        // 머리 이동
        board[next_row][next_col] = 1;
        snake.unshift([next_row, next_col]);
        // 꼬리 삭제
        board[current_head_row][current_head_col] = 0;
        snake.pop();
      }
      // 사과 있음
      else if (board[next_row][next_col] === "apple") {
        board[next_row][next_col] = 1;
        snake.unshift([next_row, next_col]);
      }
    } else {
      // 벽 밖으로 나가서 끝남
      time++;
      break;
    }
    time++;

    if (direction.length > 0 && direction[0][0] === time) {
      const [t, command] = direction.shift();
      current_direction = turn_direction(current_direction, command);
    }
  }
  return time;
}

function turn_direction(direction, command) {
  if (command === "L") {
    if (direction === 0) {
      direction = 3;
    } else {
      direction--;
    }
  }
  if (command === "D") {
    if (direction === 3) {
      direction = 0;
    } else {
      direction++;
    }
  }
  return direction;
}

console.log(
  solution(
    6,
    [
      [3, 4],
      [2, 5],
      [5, 3],
    ],
    [
      [3, "D"],
      [15, "L"],
      [17, "D"],
    ]
  )
); // 9
console.log(
  solution(
    10,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
    ],
    [
      [8, "D"],
      [10, "D"],
      [11, "D"],
      [13, "L"],
    ]
  )
); // 21
console.log(
  solution(
    10,
    [
      [1, 5],
      [1, 3],
      [1, 2],
      [1, 6],
      [1, 7],
    ],
    [
      [8, "D"],
      [10, "D"],
      [11, "D"],
      [13, "L"],
    ]
  )
); // 13

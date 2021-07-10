// 문제

// N x N 크기의 복도가 있습니다.
// 복도 1 x 1 크기의 칸으로 나누어지며 특정한 위치에는 선생님, 학생, 장애물이 있습니다.

// 선생님은 자신의 위치에서 상,하,좌,우 방향으로 감시를 진행합니다.
// 단, 복도에 장애물이 있으면 장애물 뒤편에 숨어있는 학생을 볼 수 없다.
// 또한 시력이 좋아 4가지 방향으로 끝까지 다 볼 수 있다.

// 학생은 안들키기 위해 장애물을 설치할 위치를 골라, 3개의 장애물을 설치해야 한다.

// T : 선생님, S : 학생, O : 장애물

// 풀이

// 1. dfs로?
// 2. 벽을 설치
// 3. 선생님이 쭉쭉 감시
// 4. 학생 존재 시 지속
// 5. 탐색 하다 학생 발견 안되면 return "YES"
// 6. 전부 탐색해도 계속 발견되면 return "NO"

function solution(N, state) {
  state = state.map((el) => el.split(""));
  // 선생님들 위치 저장
  const teachers_position = [];
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (state[row][col] === "T") {
        teachers_position.push([row, col]);
      }
    }
  }
  const teachers_count = teachers_position.length;

  // 벽 설치 가능한 경우의 수 저장
  const wall = [];
  set_wall();
  const move = ["up", "down", "left", "right"];

  // 벽을 설치한 경우에 따라 선생님들이 학생들을 찾음
  for (let set of wall) {
    // 1. 벽 설치
    set.forEach(([row, col]) => {
      state[row][col] = "O";
    });

    if (!find()) {
      console.log("벽 배치", set);
      console.log("전체 상태", state);
      return "YES";
    }

    set.forEach(([row, col]) => {
      state[row][col] = "X";
    });
  }
  return "NO";

  // 벽을 생성할 수 있는 조합들
  function set_wall(count = 0, position = []) {
    if (count === 3) {
      wall.push(position);
      return;
    }

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (state[row][col] === "X") {
          state[row][col] = "O";
          set_wall(count + 1, [...position, [row, col]]);
          state[row][col] = "X";
        }
      }
    }
  }

  // 선생님이 감시하는 용도 => 학생 발견한 경우 true리턴, 벽이나 (없으면 => 전체적으로 마지막에) false
  function watch(row, col, direction) {
    if (direction === "up") {
      while (row >= 0) {
        if (state[row][col] === "S") {
          return true;
        } else if (state[row][col] === "O") {
          return false;
        }
        row--;
      }
    }

    if (direction === "down") {
      while (row < N) {
        if (state[row][col] === "S") {
          return true;
        } else if (state[row][col] === "O") {
          return false;
        }
        row++;
      }
    }

    if (direction === "left") {
      while (col >= 0) {
        if (state[row][col] === "S") {
          return true;
        } else if (state[row][col] === "O") {
          return false;
        }
        col--;
      }
    }

    if (direction === "right") {
      while (col < N) {
        if (state[row][col] === "S") {
          return true;
        } else if (state[row][col] === "O") {
          return false;
        }
        col++;
      }
    }
    return false;
  }

  // 벽이 세워진 후, 선생님들이 학생을 찾는 함수
  function find() {
    // 2. 선생님들 위치에서 탐색
    // 2-1. 탐색 도중 한명이라도 발견 시 true 리턴
    // 2-2. 모든 선생님이 탐색한 후 발견 못하면 false 리턴
    for (let teacher of teachers_position) {
      const [teacher_row, teacher_col] = teacher;
      for (let direction of move) {
        if (watch(teacher_row, teacher_col, direction)) {
          return true;
        }
      }
    }
    return false;
  }
}

console.log(solution(5, ["XSXXT", "TXSXX", "XXXXX", "XTXXX", "XXTXX"])); // YES
// console.log(solution(4, ["SSST", "XXXX", "XXXX", "TTTX"])); // NO
// console.log(solution(3, ["SSS", "XXX", "TTT"])); // YES

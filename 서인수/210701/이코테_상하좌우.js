// 문제 이해
// 주어진 명령어에 따라 움직여, 도착하는 곳의 x,y 좌표를 출력

//접근
// 명령어를 순회하며 x,y를 변경하도록 한다.
// 단 공간밖으로는 이동할 수 없으므로 해당 조건을 조삼하여 설정한다.
// ex) 왼쪽으로 이동하려면, x의 좌표가 최소 1보다는 커야한다.

// 주의: 좌표평면에서올라가는 것(U)은 y값이 -1 되는 것을 의미
function solution(N, moves) {
  let y = 1;
  let x = 1;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "L") {
      x > 1 && (x -= 1);
    }
    if (moves[i] === "R") {
      x < N && (x += 1);
    }
    if (moves[i] === "U") {
      y > 1 && (y -= 1);
    }
    if (moves[i] === "D") {
      y < N && (y += 1);
    }
  }
  return [y, x];
}

// console.log(solution(5, ["R", "R", "R", "U", "D", "D"])); // [3,4]

// x,y의 변화율을 통해 푸는 방법
function solution2(N, moves) {
  let y = 1;
  let x = 1;
  // L, R , U, D 에 따른 x,y 변화량 기록
  // 주의: 좌표평면에서올라가는 것(U)은 y값이 -1 되는 것을 의미

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let command = ["L", "R", "U", "D"];
  for (let i = 0; i < moves.length; i++) {
    let c = moves[i];

    for (let j = 0; j < command.length; j++) {
      let nx = 0;
      let ny = 0;
      if (c === command[j]) {
        nx = x + dx[j];
        ny = y + dy[j];
      }
      if (nx < 1 || nx > N || ny < 1 || ny > N) {
        continue;
      }
      x = nx;
      y = ny;
    }
  }
  return [y, x];
}
console.log(solution2(5, ["R", "R", "R", "U", "D", "D"])); // [3,4]

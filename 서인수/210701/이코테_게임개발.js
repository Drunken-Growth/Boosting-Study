function solution(input) {
  let [N, M] = input.shift();
  let [x, y, dir] = input.shift();
  let world = input.shift();
  let visited = Array(N)
    .fill()
    .map(() => Array(M).fill(0));

  console.log(x, y);
  console.log(world);

  visited[x][y] = 1;
  console.log(visited);
  let visit_cnt = 1;
  let turn_cnt = 0;

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  while (true) {
    // console.log([x, y]);
    turn_left();
    nx = x + dx[dir];
    ny = y + dy[dir];

    // check Next
    if (world[nx][ny] === 0 && visited[nx][ny] === 0) {
      visited[nx][ny] = 1;
      x = nx;
      y = ny;

      visit_cnt++;
      turn_cnt = 0;
      console.log([x, y, "방문1"]);
      console.log(visited);
      continue;
    } else {
      turn_cnt++;
    }
    // 가봤던 곳이나, 존재하지 않는 경우, 바다인경우
    // 4회전 했을 때, 뒤에만 확인
    if (turn_cnt === 4) {
      nx = x - dx[dir];
      ny = y - dy[dir];

      if (world[nx][ny] === 0 && visited[nx][ny] === 0) {
        x = nx;
        y = ny;
        visited[nx][ny] = 1;
        visit_cnt++;
        console.log([x, y, "방문2"]);
        console.log(visited);
      } else {
        break;
      }
      turn_cnt = 0;
    }
  }

  function turn_left() {
    dir -= 1;
    if (dir === -1) {
      dir = 3;
    }
  }
  console.log(visit_cnt);
  return visit_cnt;
}

solution([
  [4, 4],
  [1, 1, 0],
  [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
  ],
]); //3

solution([
  [4, 4],
  [1, 1, 0],
  [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
  ],
]); //4

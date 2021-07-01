function solution(input) {
  //   console.log(input);

  let [N, M] = input.shift();
  let [y, x, dir] = input.shift();
  let world = input.shift();

  // map을 둘러싸고 바다 생성하기.
  world.map((el) => el.unshift(1));
  world.map((el) => el.push(1));
  world.unshift(Array(M + 2).fill(1));
  world.push(Array(M + 2).fill(1));
  //   console.log(world);

  // 회전따로
  // 이동따로

  // 북 동 남 서
  //  0 1 2 3
  x++;
  y++;
  world[y][x] = 3;
  // 회전 후 이동
  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];

  let move_cnt = 1;
  let turn_cnt = 0;
  while (true) {
    // console.log([y, x]);
    turn_left();

    let nx = x + dx[dir];
    let ny = y + dy[dir];
    // console.log([ny, nx, world[ny][nx], "nextX & nextY"]);
    if (isCheckGo(nx, ny)) {
      x = nx;
      y = ny;
      // 방문체크
      move_cnt++;
      turn_cnt = 0;
      world[y][x] = 3;
      //   console.log(world);
    } else {
      turn_cnt++;
    }
    if (turn_cnt === 4) {
      // 뒤로가는건 앞으로가는 것의 반대이므로 -dx, -dy
      nx = x - dx[dir];
      ny = y - dy[dir];
      if (!isCheckSea(nx, ny)) {
        x = nx;
        y = ny;
        move_cnt++;
        turn_cnt = 0;
      } else {
        // 바다로 막힘
        break;
      }
    }
  }

  // 현재 direction을 -1 해주어 바꿔주는 함수
  function turn_left() {
    dir -= 1;
    if (dir < 0) {
      dir = 3;
    }
  }

  // 앞 부분이 바다나 방문한 곳인지 확인하는 코드
  function isCheckGo(nextX, nextY) {
    // 바다아니고, 방문안했으면 true
    return world[nextY][nextX] !== 1 && world[nextY][nextX] !== 3;
  }
  function isCheckSea(nextX, nextY) {
    // 바다아니고, 방문안했으면 true
    return world[nextY][nextX] === 1;
  }

  return move_cnt;
}

console.log(
  solution([
    [4, 4],
    [1, 1, 0],
    [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 1, 1, 1],
    ],
  ])
);

console.log(
  solution([
    [4, 4],
    [1, 1, 0],
    [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [1, 1, 1, 1],
    ],
  ])
);

console.log(
  solution([
    [3, 3],
    [1, 1, 0],
    [
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 0],
    ],
  ])
);

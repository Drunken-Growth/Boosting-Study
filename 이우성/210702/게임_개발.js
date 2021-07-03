function solution(location, N, M, map) {
  let [x, y, direction] = location;
  let visited = Array.from({ length: N }, () => Array(M).fill(0));

  // 북, 동, 남, 서 방향
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  const turnLeft = () => {
    direction = direction - 1;
    if (direction === -1) direction = 3;
    return direction;
  };

  let count = 1;
  let turnCount = 0;

  while (true) {
    turnLeft();
    let nx = x + dx[direction];
    let ny = y + dy[direction];

    // 가보지 않은 곳이라면
    if (visited[nx][ny] === 0) {
      // 육지일 경우
      if (map[nx][ny] === 0) {
        x = nx;
        y = ny;
        visited[nx][ny] = 1;
        count += 1;
        continue;
      } else {
        // 바다일 경우
        turnCount += 1;
      }
    }

    // 네 면이 바다일 경우
    if (turnCount === 4) {
      nx = x - dx[direction];
      ny = y - dy[direction];

      if (map[nx][ny] === 0) {
        x = nx;
        y = ny;
      } else {
        break;
      }
    }
  }

  return count;
}

console.log(
  solution([1, 1, 0], 4, 4, [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
  ])
); // 3

/*
1. 상하좌우로 움직일 수 있고, 바다는 갈 수 없다.
  1.1 왼쪽부터 갈 방향을 정한다.
2. 왼쪽이 가보지 않은 곳이면 왼쪽부터 간다.
3. 왼쪽을 다 가본 곳이라면 왼쪽으로 회전만하고 1단계로 돌아간다.
4. 만약 네 방향 다 가본 곳이거나 바다일 경우 바라보는 방향을 유지한 채로 한 칸뒤로 가고 1단계로 돌아간다.
  4.1 만약 뒤에도 바다이면 움직일 수 없으므로 멈춘다.
5. 한 턴이 끝날 때마다 왼쪽으로 회전하는 함수를 만든다.
*/

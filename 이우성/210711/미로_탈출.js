function solution(n, m, map) {
  // 이동할 방향, 상하좌우
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  const bfs = (x, y) => {
    let queue = [x, y];

    while (queue.length !== 0) {
      let x = queue.shift();
      let y = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        // 공간을 벗어난 경우
        if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
          continue;
        }
        // // 벽 무시
        if (map[nx][ny] === 0) {
          continue;
        }
        // console.log(nx, ny, x, y);
        // // 해당 노드를 처음 방문 하는 경우에만 기록
        if (map[nx][ny] === 1) {
          map[nx][ny] = map[x][y] + 1;
          queue.push(nx, ny);
        }
      }
    }

    return map[n - 1][m - 1];
  };

  return bfs(0, 0);
}

console.log(
  solution(5, 6, [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
); // 10

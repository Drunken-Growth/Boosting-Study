function solution(maps) {
  let row = maps.length;
  let col = maps[0].length;
  let answer = -1;
  // 남쪽부터 시작한다 => 남, 서, 북, 동 방향
  let dy = [1, 0, -1, 0];
  let dx = [0, -1, 0, 1];
  let q = [[0, 0, 1]];
  let visited = [...maps].map((row) => row.map((col) => 1));

  while (q.length !== 0) {
    let [y, x, deps] = q.shift();

    // 적진 도착
    if (y === row - 1 && x === col - 1) {
      answer = deps;
      break;
    }

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      // 나락
      if (nx < 0 || ny < 0 || nx > col - 1 || ny > row - 1) {
        continue;
      }

      // 아직 가지 않은 곳이라면 방문한다.
      if (maps[ny][nx] === 1 && visited[ny][nx] === 1) {
        visited[ny][nx] = visited[y][x] + 1;
        q.push([ny, nx, deps + 1]);
      }
    }
  }

  return answer;
}

/*
1. 1이 길이고 0이 벽이며, (0, 0)에서 (n, m)까지 최단 거리로 간다.
2. 동서남북으로 한칸씩 이동하는 배열을 만든다.
3. 최단거리를 가는 것이므로 bfs를 활용한다.
4. 이동은 남쪽부터 시작한다.
*/

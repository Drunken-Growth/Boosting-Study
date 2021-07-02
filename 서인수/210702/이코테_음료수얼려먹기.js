function solution(N, M, input) {
  let graph = input
    .split("\n")
    .map((el) => el.split("").map((el2) => Number(el2)));
  graph.map((el) => el.unshift(1));
  graph.unshift(Array(graph[0].length).fill(1));

  console.log(graph);
  function dfs(x, y) {
    if (x < 1 || y < 1 || x >= M + 1 || y >= N + 1) return false;
    if (!graph[y][x]) {
      graph[y][x] = 1;

      dfs(y - 1, x); // 상
      dfs(y + 1, x); // 하
      dfs(y, x - 1); // 좌
      dfs(y, x + 1); // 우
      return true;
    }
    return false;
  }

  let cnt = 0;
  for (let row = 1; row < N + 1; row++) {
    for (let col = 1; col < M + 1; col++) {
      let isMake = dfs(row, col);
      isMake && cnt++;
    }
  }
  console.log(graph);
  console.log(cnt);
  return cnt;
}

solution(
  4,
  5,
  `00110
00011
11111
00000`
);

solution(
  3,
  3,
  `001
010
101`
);

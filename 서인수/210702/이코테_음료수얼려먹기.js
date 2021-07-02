function solution(N, M, input) {
  let graph = input
    .split("\n")
    .map((el) => el.split("").map((el2) => Number(el2)));

  let cnt = 0;

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= M || y >= N) return 0;

    if (graph[y][x] === 0) {
      graph[y][x] = 1;
      //   console.log([x, y]);
      dfs(y - 1, x);
      dfs(y + 1, x);
      dfs(y, x + 1);
      dfs(y, x - 1);

      return 1;
    }
    return 0;
  }

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      cnt += dfs(row, col);
    }
  }
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

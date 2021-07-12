function solution(n, m, map) {
  const dfs = (x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= m) {
      return false;
    }

    // 아직 방문하지 않았다면 방문 처리
    if (map[x][y] === 0) {
      map[x][y] = 1;
      // 상하좌우 재귀적으로 호출
      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
      return true;
    }
    return false;
  };

  let answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j) === true) {
        answer += 1;
      }
    }
  }

  return answer;
}

console.log(
  solution(4, 5, [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ])
); // 3

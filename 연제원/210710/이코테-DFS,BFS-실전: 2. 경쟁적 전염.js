// 문제

// N x N 크기의 시험관이 있다. 1 x 1 크기의 칸으로 나누어지며, 특정한 위치에는 바이러스가 존재할 수 있다.
// 바이러스 종류는 1~K 번까지 K가지가 있으며 모든 바이러스는 이 중 하나에 속한다.

// 시험관에 존재하는 모든 바이러스는 1초마다 상하좌우 로 증식하는데 매초 번호가 낮은 종류의 바이러스부터 먼저 증식한다.
// 증식 과정에서 특정한 칸에 이미 어떠한 바이러스가 있다면 그곳에는 다른 바이러스가 들어갈 수 없다.

// 시험관 크기, 바이러스 위치가 주어질때, S 초가 지난 후에 (X, Y)에 존재하는 바이러스의 종류를 출력하는 프로그램을 작성해라

// S초 후, 바이러스가 없으면 0을 출력

function solution(N, K, test_tube, S, X, Y) {
  const dRow = [0, 0, -1, 1];
  const dCol = [-1, 1, 0, 0];

  const tmp = Array(N + 1)
    .fill(0)
    .map(() => Array(N + 1).fill(0));

  function dfs(count) {
    if (count === S) {
      return;
    }

    let cur_virus = 1;
    while (cur_virus <= K) {
      const cur_virus_pos = [];
      for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
          if (test_tube[row][col] === cur_virus) {
            cur_virus_pos.push([row, col]);
          }
        }
      }

      for (let [row, col] of cur_virus_pos) {
        for (let i = 0; i < 4; i++) {
          const next_row = row + dRow[i];
          const next_col = col + dCol[i];
          if (next_row >= 0 && next_row < N && next_col >= 0 && next_col < N) {
            if (test_tube[next_row][next_col] === 0) {
              test_tube[next_row][next_col] = cur_virus;
            }
          }
        }
      }

      cur_virus++;
    }
    dfs(count + 1);
  }
  dfs(0);
  return test_tube[X - 1][Y - 1];
}

console.log(
  solution(
    3,
    3,
    [
      [1, 0, 2],
      [0, 0, 0],
      [3, 0, 0],
    ],
    2,
    3,
    2
  )
); // 3

console.log(
  solution(
    3,
    3,
    [
      [1, 0, 2],
      [0, 0, 0],
      [3, 0, 0],
    ],
    1,
    2,
    2
  )
); // 0

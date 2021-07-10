// 문제

// 바이러스 확산을 막기위해 벽을 세우려고 한다.

// 연구소 크기는 N x M이고 1 x 1크기로 이루어져 있다.
// 연구소는 빈칸, 벽으로 나타낼 수 있고, 벽은 칸 하나를 가득 차지한다.

// 일부 칸은 바이러스가 존재하며, 이 바이러스는 상하좌우로 인접한 빈칸으로 모두 퍼져나갈 수 있다.
// 새로 세울 수 있는 벽의 개수는 3개며, 꼭 3개를 세워야 한다.

// 0 : 빈칸
// 1 : 벽
// 2 : 바이러스

// 벽을 3개 세운 뒤 바이러스가 퍼질 수 없는 곳을 안전 영역이라 할 때
// 연구소 지도가 주어졌을 때, 얻을 수 있는 안전 영역 크기의 최댓값을 구해라

// 1. 벽을 세울 수 있는 모든 경우의 수 반복
// 2. 세울 때 마다 연구실을 확인해서 2를 다 퍼뜨린다.
// 3. 안전한 구역 0을 찾아서 매번 최댓값과 비교

function solution(N, M, lab) {
  const dRow = [0, 1, 0, -1];
  const dCol = [-1, 0, 1, 0];

  const temp = Array(N)
    .fill(0)
    .map(() => Array(M).fill(0));

  // 바이러스가 퍼지는 함수
  function virus(row, col) {
    for (let i = 0; i < 4; i++) {
      const next_row = row + dRow[i];
      const next_col = col + dCol[i];

      if (next_row >= 0 && next_row < N && next_col >= 0 && next_col < M) {
        if (temp[next_row][next_col] === 0) {
          temp[next_row][next_col] = 2;
          virus(next_row, next_col);
        }
      }
    }
  }

  // 안전 구역 계산하는 함수
  function safe_zone() {
    let count = 0;
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < M; col++) {
        if (temp[row][col] === 0) {
          count++;
        }
      }
    }
    return count;
  }

  let answer = 0;
  // 벽 설치 및 완전 계산
  function dfs(wall_count) {
    if (wall_count === 3) {
      for (let row = 0; row < N; row++) {
        for (let col = 0; col < M; col++) {
          temp[row][col] = lab[row][col];
        }
      }

      for (let row = 0; row < N; row++) {
        for (let col = 0; col < M; col++) {
          if (temp[row][col] === 2) {
            virus(row, col);
          }
        }
      }

      answer = Math.max(answer, safe_zone());
      return;
    }

    for (let row = 0; row < N; row++) {
      for (let col = 0; col < M; col++) {
        if (lab[row][col] === 0) {
          lab[row][col] = 1;
          wall_count++;
          dfs(wall_count);
          lab[row][col] = 0;
          wall_count--;
        }
      }
    }
  }
  dfs(0);
  return answer;
}

console.log(
  solution(7, 7, [
    [2, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 2, 0],
    [0, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
  ])
); // 27

console.log(
  solution(4, 6, [
    [0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 2],
    [1, 1, 1, 0, 0, 2],
    [0, 0, 0, 0, 0, 2],
  ])
); // 9

console.log(
  solution(8, 8, [
    [2, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 2],
    [2, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ])
); // 3

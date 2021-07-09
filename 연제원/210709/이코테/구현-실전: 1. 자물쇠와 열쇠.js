// 문제

// 잠겨있는 자물쇠는 격자 한 칸의 크기가 1x1인 NxN 크기의 정사각 격자 형태이고,
// 특이한 모양의 열쇠는 MxM 크기인 정사각 격자 형태로 되어 있습니다.

// 자물쇠에는 홈이 파여있고, 열쇠 또한 홈과 돌기부분이 있습니다.
// 열쇠는 회전과 이동이 가능하며, 열쇠의 돌기부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열리게 되는 구조입니다.
// 자물쇠 영역을 벗어난 부분에 있는 열쇠의 홈과 돌기는 자물쇠를 여는 데 영향을 주지 않지만,
// 자물쇠 영역 내에서는 열쇠의 돌기 부분과 자물쇠의 홈 부분이 정확히 일치해야 하며
// 열쇠의 돌기와 자물쇠의 돌기가 만나서는 안된다.
// 또한 자물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있다.

// 자물쇠를 열 수 있으면 true, 없으면, false를 리턴

// key는 MxM (3 <= M <= 20) 크기 2차원 배열
// lock은 NxN (3 <= M <= 20) 크기 2차원 배열
// M은 항상 N이하다.
// key, block의 원소는 0 또는 1로 이루어져 있다. 0 : 홈, 1 : 돌기

// 회전 가능..?
// => 열쇠의 돌기 (M[i] = 1), 자물쇠의 홈 (N[i] = 0)이 맞아야 일치한 것

// 1. 범위 내 모든 이동
// 2. 자물쇠 맞는 지 파악
// 3. 회전 후 진행
function solution(key, lock) {
  for (let rotate = 0; rotate < 4; rotate++) {
    if (insert_key(key, lock)) {
      return true;
    }
    key = rotate_key(key);
  }
  return false;
}

// 3배로 늘린 자물쇠의 가운데가 전부 1이면 풀린 것 => true
function check_lock(lock) {
  const N = lock.length / 3;
  for (let row = N; row < 2 * N; row++) {
    for (let col = N; col < 2 * N; col++) {
      if (lock[row][col] !== 1) {
        return false;
      }
    }
  }
  return true;
}

// 자물쇠를 가로 세로 3배씩 한다.
// 그리고 가운데를 판단!
function insert_key(key, lock) {
  const M = key.length;
  const N = lock.length;

  const new_lock = Array(3 * N)
    .fill(0)
    .map(() => Array(3 * N).fill(0));
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      new_lock[row + N][col + N] = lock[row][col];
    }
  }

  for (let start_row = 0; start_row < 2 * N; start_row++) {
    for (let start_col = 0; start_col < 2 * N; start_col++) {
      for (let row = 0; row < M; row++) {
        for (let col = 0; col < M; col++) {
          new_lock[start_row + row][start_col + col] += key[row][col];
        }
      }
      if (check_lock(new_lock)) {
        return true;
      } else {
        for (let row = 0; row < M; row++) {
          for (let col = 0; col < M; col++) {
            new_lock[start_row + row][start_col + col] -= key[row][col];
          }
        }
      }
    }
  }
  return false;
}

function rotate_key(key) {
  const M = key.length;
  let rotate = Array(M)
    .fill(0)
    .map(() => Array(M).fill(0));

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < M; j++) {
      rotate[j][M - 1 - i] = key[i][j];
    }
  }

  return rotate;
}

// function rotate_key(key) {
//   const N = key.length;

//   // 시계 방향으로 90도 회전
//   // 1. [0,0] ~ [N-1][N-1] 대각선을 기준으로 다 자리바꿈
//   // 2. N = 홀수 일때, [0, (N-1)/2] ~ [N, (N-1)/2] 를 기준으로 다 바꿈
//   //    N = 짝수 일때, 좌우반전
//   for (let row = 0; row < N; row++) {
//     for (let col = row; col < N; col++) {
//       if (row !== col) {
//         [key[row][col], key[col][row]] = [key[col][row], key[row][col]];
//       }
//     }
//   }

//   for (let row = 0; row < N; row++) {
//     for (let col = 0; col < (N - 1) / 2; col++) {
//       [key[row][col], key[row][N - 1 - col]] = [
//         key[row][N - 1 - col],
//         key[row][col],
//       ];
//     }
//   }

//   return key;
// }

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
); // true

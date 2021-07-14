/* 행렬 스와이프 */

function solution(rows, columns, swipes) {
  const result = [];
  const arr = makeArr();

  for (let i = 0; i < swipes.length; i++) {
    const [d, r1, c1, r2, c2] = swipes[i];
    if (d === 1) down(r1, c1, r2, c2);
    if (d === 2) up(r1, c1, r2, c2);
    if (d === 3) right(r1, c1, r2, c2);
    if (d === 4) left(r1, c1, r2, c2);
  }
  return result;

  function down(r1, c1, r2, c2) {
    const last = arr[r2 - 1].slice(c1 - 1, c2);
    result.push(last.reduce((p, c) => p + c, 0));
    for (let i = r2 - 2; i >= r1 - 1; i--) {
      for (let j = c1 - 1; j < c2; j++) {
        arr[i + 1][j] = arr[i][j];
      }
    }
    for (let i = 0; i < c2 - c1 + 1; i++) {
      arr[r1 - 1][c1 - 1 + i] = last[i];
    }
  }

  function up(r1, c1, r2, c2) {
    const last = arr[r1 - 1].slice(c1 - 1, c2);
    result.push(last.reduce((p, c) => p + c, 0));
    for (let i = r1; i < r2; i++) {
      for (let j = c1 - 1; j < c2; j++) {
        arr[i - 1][j] = arr[i][j];
      }
    }
    for (let i = 0; i < c2 - c1 + 1; i++) {
      arr[r2 - 1][c1 - 1 + i] = last[i];
    }
  }

  function right(r1, c1, r2, c2) {
    const last = [];
    for (let i = r1 - 1; i < r2; i++) {
      last.push(arr[i][c2 - 1]);
    }
    result.push(last.reduce((p, c) => p + c, 0));
    for (let i = c2 - 2; i >= c1 - 1; i--) {
      for (let j = r1 - 1; j < r2; j++) {
        arr[j][i + 1] = arr[j][i];
      }
    }
    for (let i = 0; i < r2 - r1 + 1; i++) {
      arr[r1 - 1 + i][c1 - 1] = last[i];
    }
  }

  function left(r1, c1, r2, c2) {
    const last = [];
    for (let i = r1 - 1; i < r2; i++) {
      last.push(arr[i][c1 - 1]);
    }
    result.push(last.reduce((p, c) => p + c, 0));
    for (let i = c1; i < c2; i++) {
      for (let j = r1 - 1; j < r2; j++) {
        arr[j][i - 1] = arr[j][i];
      }
    }
    for (let i = 0; i < r2 - r1 + 1; i++) {
      arr[r1 - 1 + i][c2 - 1] = last[i];
    }
  }

  function makeArr() {
    let arr = Array(rows)
      .fill(0)
      .map((_) => Array(columns).fill(0));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        arr[i][j] = i * columns + j + 1;
      }
    }
    return arr;
  }
}

console.log(
  solution(4, 3, [
    [1, 1, 2, 4, 3],
    [3, 2, 1, 2, 3],
    [4, 1, 1, 4, 3],
    [2, 2, 1, 3, 3],
  ])
); //  [23, 3, 21, 9]

console.log(
  solution(2, 4, [
    [3, 1, 2, 2, 4],
    [3, 1, 2, 2, 4],
    [4, 2, 1, 2, 3],
    [1, 1, 1, 2, 3],
  ])
); //  [12, 10, 5, 20]

console.log(
  solution(2, 2, [
    [3, 1, 1, 1, 2],
    [1, 1, 2, 2, 2],
    [4, 2, 1, 2, 2],
    [2, 1, 1, 2, 1],
  ])
); //  [2, 4, 3, 2]

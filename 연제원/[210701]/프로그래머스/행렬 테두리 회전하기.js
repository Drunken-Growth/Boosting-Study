function solution(rows, columns, queries) {
  let answer = [];
  const matrix = makeMatrix(rows, columns);

  for (let x of queries) {
    let min = Number.MAX_SAFE_INTEGER;
    let [r1, c1, r2, c2] = x;
    // r1, c1 = 시작 행렬
    // r2, c2 = 끝 행렬
    // => 각각 1을 빼줘야 실제 배열에서 사용가능

    // 시작값 저장
    // ex. [2,2,5,4]일 떄 (2,2) = matrix[1][1] 저장
    let save = matrix[r1 - 1][c1 - 1];

    // 시계방향으로 회전
    // 시작값에서 오른쪽방향
    // ex. (2,3) ~ (2,4) = matrix[1][2] ~ matrix[1][3]
    for (let i = c1; i < c2; i++) {
      min = Math.min(min, save);
      // 값을 계속 저장!
      [matrix[r1 - 1][i], save] = [save, matrix[r1 - 1][i]];
    }

    // 아래방향
    for (let i = r1; i < r2; i++) {
      min = Math.min(min, save);
      [matrix[i][c2 - 1], save] = [save, matrix[i][c2 - 1]];
    }

    // 왼쪽방향
    for (let i = c2 - 2; i >= c1 - 1; i--) {
      min = Math.min(min, save);
      [matrix[r2 - 1][i], save] = [save, matrix[r2 - 1][i]];
    }

    // 위방향
    for (let i = r2 - 2; i >= r1 - 1; i--) {
      min = Math.min(min, save);
      [matrix[i][c1 - 1], save] = [save, matrix[i][c1 - 1]];
    }

    answer.push(min);
  }

  return answer;
}

function makeMatrix(row, col) {
  const result = [];
  for (let i = 0; i < row; i++) {
    const ele = [];
    for (let j = 1; j <= col; j++) {
      ele.push(col * i + j);
    }
    result.push(ele);
  }
  return result;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
); // [8, 10, 25]
console.log(
  solution(3, 3, [
    [1, 1, 2, 2],
    [1, 2, 2, 3],
    [2, 1, 3, 2],
    [2, 2, 3, 3],
  ])
); // [1, 1, 5, 3]
console.log(solution(100, 97, [[1, 1, 100, 97]])); // [1]

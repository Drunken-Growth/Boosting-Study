/** 이코테 - 미래도시
 *  (플로이드 워셜 알고리즘)
 *   => A->B 와, A->다른곳->B 중 최단거리를 계속해서 구함
 */

function solution(n, x, k, arr) {
  let matrix = makeMatrix();
  fillMatrix(matrix);

  for (let i = 1; i <= n; i++) {
    for (let a = 1; a <= n; a++) {
      for (let b = 1; b <= n; b++) {
        matrix[a][b] = Math.min(matrix[a][b], matrix[a][i] + matrix[i][b]);
      }
    }
  }
  return matrix[1][k] + matrix[k][x] !== Infinity
    ? matrix[1][k] + matrix[k][x]
    : -1;

  function fillMatrix(matrix) {
    arr.forEach((edge) => {
      let [from, to] = edge;
      matrix[from][to] = 1;
      matrix[to][from] = 1;
    });
  }

  function makeMatrix() {
    let matrix = [];
    for (let i = 0; i <= n; i++) {
      let tmp = [];
      for (let j = 0; j <= n; j++) {
        if (i === j) tmp.push(0);
        else tmp.push(Infinity);
      }
      matrix.push(tmp);
    }
    return matrix;
  }
}

console.log(
  solution(5, 4, 5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [3, 4],
    [3, 5],
    [4, 5],
  ])
); // 3

console.log(
  solution(4, 3, 4, [
    [4, 2],
    [1, 3],
    [2, 4],
  ])
); // -1

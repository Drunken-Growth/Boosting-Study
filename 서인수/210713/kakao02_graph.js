// 문제이해
// 그래프를 commands(1,2,3,4)에 따라 각각 상화좌우로 이동하는 단계를 수행한다.
// 각 swipe를 수행할 때, 끝에서 움직이게 되는 숫자들의 합을 리턴하는 문제

// 문제풀이
// 1. 그래프 만들기
// 2. 각각의 단계에 맞게 동작을 수행할 수 있도록 분기처리한다.
// 3. r1,c1, r2,c2 는 좌표를 의미하므로 , idx로 사용하도록 각각 1씩 빼준다. (1,1)은 graph[0][0]이다.
// 3.1 현재 그래프를 카피하여, 움직이는 곳에 value를 넣을 수 있도록 한다.
// 나머지는 그래프 구현능력에 따라 구현

function solution(rows, columns, swipes) {
  let graph = [];
  let result = [];
  for (let r = 0; r < rows; r++) {
    graph[r] = [];
    for (let c = 0; c < columns; c++) {
      graph[r][c] = r * columns + c + 1;
    }
  }

  for (let i = 0; i < swipes.length; i++) {
    let [d, r1, c1, r2, c2] = swipes[i];
    r1 = r1 - 1;
    c1 = c1 - 1;
    r2 = r2 - 1;
    c2 = c2 - 1;

    let copy = copy_graph(graph);
    if (d === 1) {
      for (let i = r1; i < r2; i++) {
        // 0 -> < 3 => 0,1,2
        for (let j = c1; j <= c2; j++) {
          graph[i + 1][j] = copy[i][j];
        }
      }
      let sum = 0;
      for (let j = c1; j <= c2; j++) {
        graph[r1][j] = copy[r2][j];
        sum += copy[r2][j];
      }
      result.push(sum);
    }

    if (d === 2) {
      for (let i = r1 + 1; i < r2 + 1; i++) {
        for (let j = c1; j <= c2; j++) {
          graph[i - 1][j] = copy[i][j];
        }
      }
      let sum = 0;
      for (let j = c1; j <= c2; j++) {
        graph[r2][j] = copy[r1][j];
        sum += copy[r1][j];
      }
      result.push(sum);
    }

    if (d === 3) {
      for (let i = c1; i < c2; i++) {
        for (let j = r1; j <= r2; j++) {
          graph[j][i + 1] = copy[j][i];
        }
      }
      let sum = 0;
      for (let j = r1; j <= r2; j++) {
        graph[j][c1] = copy[j][c2];
        sum += copy[j][c2];
      }
      result.push(sum);
    }

    if (d === 4) {
      for (let i = c1 + 1; i < c2 + 1; i++) {
        for (let j = r1; j <= r2; j++) {
          graph[j][i - 1] = copy[j][i];
        }
      }
      let sum = 0;
      for (let j = r1; j <= r2; j++) {
        graph[j][c2] = copy[j][c1];
        sum += copy[j][c1];
      }
      result.push(sum);
    }
  }
  return result;

  function copy_graph(graph) {
    let newgraph = [];
    for (let i = 0; i < graph.length; i++) {
      newgraph.push([...graph[i]]);
    }
    return newgraph;
  }
}

console.log(
  solution(4, 3, [
    [1, 1, 2, 4, 3],
    [3, 2, 1, 2, 3],
    [4, 1, 1, 4, 3],
    [2, 2, 1, 3, 3],
  ])
); // 23,3,21,9
console.log(
  solution(2, 4, [
    [3, 1, 2, 2, 4],
    [3, 1, 2, 2, 4],
    [4, 2, 1, 2, 3],
    [1, 1, 1, 2, 3],
  ])
); // 12,10,5,20
console.log(
  solution(2, 2, [
    [3, 1, 1, 1, 2],
    [1, 1, 2, 2, 2],
    [4, 2, 1, 2, 2],
    [2, 1, 1, 2, 1],
  ])
); // 2, 4, 3 ,2

// 완전탐색

// BFS로 구현

// 1. 좌표값을 받아서 [row, col]
// 2 갈 수 있는 좌표를 검사한다.
// 3. 해당 좌표를 다시 큐에 넣는다.
// 4. 큐에서 뽑힐 때 마다 cnt ++
// 5. 막히거나 , (N, M)에 도달하면 break;

function solution(N, M, graph) {
  graph = graph.map((el) => el.split("").map((el) => Number(el)));

  // 상하좌우
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  let result = [];
  let Q = [[0, 0, 1]]; // (row, col)
  graph[0][0] = 0;
  while (Q.length > 0) {
    let [yPos, xPos, curVal] = Q.shift();

    // console.log([yPos, xPos, curVal, Q]);
    if (yPos === N - 1 && xPos === M - 1) {
      result.push(curVal);
      break;
    }
    for (let i = 0; i < 4; i++) {
      let nx = xPos + dx[i];
      let ny = yPos + dy[i];

      if (nx < 0 || ny < 0 || ny >= N || nx >= M) {
        continue;
      }

      if (graph[ny][nx] === 1) {
        graph[ny][nx] = 0; // 방문처리
        Q.push([ny, nx, curVal + 1]);
      }
    }
  }
  console.log(result);
  return Math.min(result);
}

solution(5, 6, ["101010", "111111", "000001", "111111", "111111"]);
solution(3, 3, ["110", "010", "011"]);

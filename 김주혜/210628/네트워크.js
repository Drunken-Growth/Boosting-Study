/* 프로그래머스 네트워크
  1. 인접노드 -> 인접그래프 변환
  2. 0~n까지 순회하며, bfs탐색
  3. Q가 빌때마다 네트워크 개수(count) 증가
*/

function solution(n, computers) {
  const graph = makeGraph(computers);
  const visited = Array(n).fill(false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      let Q = [i];
      while (Q.length) {
        let v = Q.shift();
        graph[v].forEach((node) => {
          if (!visited[node]) {
            visited[node] = true;
            Q.push(node);
          }
        });
      }
      count++;
    }
  }
  return count;
}

function makeGraph(computers) {
  let graph = {};
  computers.forEach((edges, node) => {
    let nodes = [];
    edges.forEach((edge, i) => {
      if (edge === 1 && i !== node) nodes.push(i);
    });
    graph[node] = nodes;
  });
  return graph;
}

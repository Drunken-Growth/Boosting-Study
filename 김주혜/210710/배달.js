/* 프로그래머스 - 배달 (BFS) */

function solution(N, road, K) {
  const graph = makeGraph();
  const visited = Array(N + 1).fill(Infinity);
  visited[1] = 0;
  const Q = [[1, 0]];
  while (Q.length) {
    let [v, w] = Q.shift();
    let ables = [];
    for (let i = 0; i < graph[v].length; i++) {
      if (visited[graph[v][i][0]] > visited[v] + graph[v][i][1]) {
        visited[graph[v][i][0]] = visited[v] + graph[v][i][1];
        ables.push(graph[v][i]);
      }
    }
    Q.push(...ables);
  }
  return visited.filter((el) => el <= K).length;

  function makeGraph() {
    let graph = {};
    for (let i = 0; i < road.length; i++) {
      let [a, b, w] = road[i];
      graph[a] ? graph[a].push([b, w]) : (graph[a] = [[b, w]]);
      graph[b] ? graph[b].push([a, w]) : (graph[b] = [[a, w]]);
    }
    return graph;
  }
}

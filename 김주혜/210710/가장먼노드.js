/* 프로그래머스 - 배달 (BFS. 그래프) */

function solution(n, edge) {
  const graph = makeGraph();
  const visited = Array(n + 1).fill(Infinity);
  visited[1] = 0;
  const Q = [1];
  while (Q.length) {
    const v = Q.shift();
    const ables = [];
    for (let i = 0; i < graph[v].length; i++) {
      if (visited[graph[v][i]] > visited[v] + 1) {
        visited[graph[v][i]] = visited[v] + 1;
        ables.push(graph[v][i]);
      }
    }
    Q.push(...ables);
  }
  let max = Math.max(...visited.slice(1));
  return visited.filter((node) => node === max).length;

  function makeGraph() {
    let graph = {};
    for (let i = 0; i < edge.length; i++) {
      let [a, b] = edge[i];
      graph[a] ? graph[a].push(b) : (graph[a] = [b]);
      graph[b] ? graph[b].push(a) : (graph[b] = [a]);
    }
    return graph;
  }
}

/* 해커랭크 - Find the nearest clone (그래프) */

function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
  let graph = makeGraph();

  // create val color array
  let targets = [];
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] === val) targets.push(i + 1);
  }

  // start from targets[i], bfs
  let min = Infinity;
  for (let i = 0; i < targets.length; i++) {
    let visited = Array(graphNodes + 1).fill(false);
    visited[targets[i]] = true;
    let Q = [[targets[i], 0]];
    while (Q.length) {
      let [v, step] = Q.shift();
      if (graph[v]) {
        for (let i = 0; i < graph[v].length; i++) {
          if (!visited[graph[v][i]]) {
            if (ids[graph[v][i] - 1] === val) {
              min = Math.min(min, step + 1);
              break;
            }
            visited[graph[v][i]] = true;
            Q.push([graph[v][i], step + 1]);
          }
        }
      }
    }
  }
  return min === Infinity ? -1 : min;

  function makeGraph() {
    let graph = {};
    for (let i = 0; i < graphFrom.length; i++) {
      let [from, to] = [graphFrom[i], graphTo[i]];
      graph[from] ? graph[from].push(to) : (graph[from] = [to]);
      graph[to] ? graph[to].push(from) : (graph[to] = [from]);
    }
    return graph;
  }
}

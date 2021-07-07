/*  해커랭크 - BFS(그래프) */

function processData(input) {
  input = input.split("\n");
  let queries = [];
  let i = 1;

  while (i < input.length) {
    let [n, q] = input[i].split(" ").map((el) => Number(el));
    let nodes = input.slice(i + 1, i + 1 + q);
    let s = Number(input[i + 1 + q]);
    nodes = nodes.map((el) => el.split(" ").map((el) => Number(el)));
    queries.push([n, s, nodes]);
    i += q + 2;
  }

  for (let i = 0; i < Number(input[0]); i++) {
    let [n, s, nodes] = queries[i];
    let graph = makeGraph(nodes);
    let visited = Array(n + 1).fill(Infinity);
    visited[s] = 0;
    let Q = [[s, 0]];
    while (Q.length) {
      let [v, step] = Q.shift();
      for (let i = 0; i < graph[v].length; i++) {
        if (visited[graph[v][i]] > step + 6) {
          visited[graph[v][i]] = step + 6;
          Q.push([graph[v][i], step + 6]);
        }
      }
    }
    let ans = [];
    for (let i = 1; i <= n; i++) {
      if (visited[i] === Infinity) ans.push(-1);
      else if (visited[i] > 0) ans.push(visited[i]);
    }
    if (ans.length) console.log(ans.join(" "));
  }

  function makeGraph(nodes) {
    let graph = {};
    for (let i = 0; i < nodes.length; i++) {
      let [from, to] = nodes[i];
      graph[from] ? graph[from].push(to) : (graph[from] = [to]);
      graph[to] ? graph[to].push(from) : (graph[to] = [from]);
    }
    return graph;
  }
}

function solution(graph, start) {
  let result = [];
  let visited = Array(graph.length).fill(false);

  function dfs(node) {
    visited[node] = true;
    result.push(node);

    for (let i = 0; i < graph[node].length; i++) {
      if (!visited[graph[node][i]]) {
        dfs(graph[node][i]);
      }
    }
  }

  dfs(start);

  console.log(result);
  return result;
}

solution(
  [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]],
  1
);

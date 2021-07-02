function solution(graph, start) {
  let result = [];
  let visited = Array(graph.length).fill(false);

  function bfs(node) {
    let Q = [node];
    visited[node] = true;

    while (Q.length > 0) {
      let popNode = Q.shift();
      result.push(popNode);

      for (let i = 0; i < graph[popNode].length; i++) {
        let linkedNode = graph[popNode][i];
        if (!visited[linkedNode]) {
          Q.push(linkedNode);
          visited[linkedNode] = true;
        }
      }
    }
  }

  bfs(start);

  console.log(result);
  return result;
}

solution(
  [[], [2, 3, 8], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6, 8], [1, 7]],
  1
);

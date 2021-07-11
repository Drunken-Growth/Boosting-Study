// 플로이드 워셜

// 각 단계에서 해당 노드를 거쳐 가는 경우를 고려한다.

// N : 노드의 개수
// M : 간선의 개수
// edges : 간선 정보

function solution(N, M, edges) {
  // 2차원 배열로 모든 값 무한으로 초기화
  const graph = Array(N + 1)
    .fill(0)
    .map(() => Array(N + 1).fill(Number.MAX_SAFE_INTEGER));

  // 자기 자신에서 자기 자신으로 가는 비용은 0으로 초기화
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) {
        graph[i][j] = 0;
      }
    }
  }

  // 각 간선에 대한 정보를 받아, 그 값으로 초기화
  for (let edge of edges) {
    const [from, to, cost] = edge;
    graph[from][to] = cost;
  }

  // 점화식에 따라 플로이드 워셜 알고리즘 수행
  for (let k = 1; k <= N; k++) {
    for (let a = 1; a <= N; a++) {
      for (let b = 1; b <= N; b++) {
        graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
      }
    }
  }

  return graph;
}

console.log(
  solution(4, 7, [
    [1, 2, 4],
    [1, 4, 6],
    [2, 1, 3],
    [2, 3, 7],
    [3, 1, 5],
    [3, 4, 4],
    [4, 3, 2],
  ])
);

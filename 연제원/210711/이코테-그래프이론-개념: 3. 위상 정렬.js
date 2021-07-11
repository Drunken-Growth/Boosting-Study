// 위상 정렬

// N : 노드 개수
// E : 간선 개수
// edges : 간선의 종류 [a, b] => a에서 b로 이동

function solution(N, E, edges) {
  // 진입 차수
  const indegree = Array(N + 1).fill(0);
  const graph = Array(N + 1)
    .fill(0)
    .map(() => Array(0));

  // 간선 정보를 토대로 진입 차수 할당!
  for (let edge of edges) {
    const [a, b] = edge;
    graph[a].push(b);
    indegree[b]++;
  }

  // 위상 정렬 함수
  function topology_sort() {
    const result = [];
    const q = [];

    // 처음 시작할 때 진입차수가 0인 노드를 큐에 삽입
    for (let i = 1; i <= N; i++) {
      if (indegree[i] === 0) {
        q.push(i);
      }
    }

    // 큐가 빌때까지 반복
    while (q.length > 0) {
      const now = q.shift();
      result.push(now);

      for (let next_node of graph[now]) {
        indegree[next_node]--;
        if (indegree[next_node] === 0) {
          q.push(next_node);
        }
      }
    }
    return result;
  }

  return topology_sort();
}

console.log(
  solution(7, 8, [
    [1, 2],
    [1, 5],
    [2, 3],
    [2, 6],
    [3, 4],
    [4, 7],
    [5, 6],
    [6, 4],
  ])
);

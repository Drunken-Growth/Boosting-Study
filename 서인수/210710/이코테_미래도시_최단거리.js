// 문제이해
// 1에서 부터 시작하여, K번 노드를 먼저 거친 뒤 X에 도착하는 최단거리르 구하는 문제

// 문제 접근 및 풀이
// 플로이드워셜 최단거리를 구해서, graph[1][K] + graph[K][X] 로 구한다.

function solution(N, M, X, K, edges) {
  //1. 그래프만들기
  let graph = Array(N + 1)
    .fill(0)
    .map(() => Array(N + 1).fill(Infinity));
  //1.2 시작-도착 노드 같은 것 0으로 거리 바꿈
  graph.map((el, idx) =>
    el.map((_, idx2) => {
      if (idx === idx2) {
        graph[idx][idx2] = 0;
      }
    })
  );
  // 1.3 연결된 도시는 거리를 1로 만듦(양방향 그래프)
  edges.map((edge) => {
    let [from, to] = edge;
    graph[from][to] = 1;
    graph[to][from] = 1;
  });

  //2. 노드만큼 돌며, 특정노드를 거칠 때의 최단거리표 갱신하기 (점화식이용)
  for (let i = 1; i < N + 1; i++) {
    for (let from = 1; from < N + 1; from++) {
      for (let to = 1; to < N + 1; to++) {
        graph[from][to] = Math.min(
          graph[from][to],
          graph[from][i] + graph[i][to]
        );
      }
    }
  }
  console.log(graph);
  //3. K를 거쳐가는 최단거리 도출
  let min = graph[1][K] + graph[K][X];
  if (min === Infinity) return -1;
  return min;
}
console.log(
  solution(5, 7, 4, 5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [3, 4],
    [3, 5],
    [4, 5],
  ])
); //3

console.log(
  solution(4, 2, 3, 4, [
    [1, 3],
    [2, 4],
  ])
); // -1

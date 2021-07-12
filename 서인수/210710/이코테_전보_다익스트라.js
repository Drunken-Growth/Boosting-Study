// start에서 도달 가능한 노드의 수와, 가장 큰 거리의 값을 구하는 문제

// 문제접근 및 풀이
// 다익스트라 알고리즘 사용 (시작값 정해져있고ㅡ 모든 노드와의 방문여부, 거리측정)

// 다익스트라
// visited, distance 배열을 채워나간다.
function solution(N, M, start, edges) {
  // 0. 준비
  // visited(방문여부), distance(출발부터 각 노드까지의 거리), graph(인접행렬)
  // 0.1 visited, distance
  let visited = Array(N + 1).fill(false);
  let distance = Array(N + 1).fill(Infinity);

  //0.2 그래프만들가
  let graph = makeGraph(edges);

  //1. 시작노드 설정하기
  distance[start] = 0;
  visited[start] = true;

  for (let i = 1; i < graph[start].length; i++) {
    distance[i] = graph[start][i];
  }

  // 2. 다음 최단거리 노드 방문하며 갱신하기
  // 2.1 start 뺀 만큼 방문해야함 (0번째는 빈값이고, 1번째부터 N-1까지)
  // 2.2 다음방문노드 = 방문하지 않은 곳 중에서, 최단거리 노드
  // 2.3 현재 distance 와 거쳐서방문하는 것과의 거리를 비교하여 최소값으로 설정
  for (let i = 1; i < N; i++) {
    let now = get_smallest_node();
    visited[now] = true;
    for (let j = 1; j < N + 1; j++) {
      let cost = distance[now] + graph[now][j];
      if (cost < distance[j]) {
        distance[j] = cost;
      }
    }
  }
  let cnt = visited.reduce((acc, cur) => acc + cur);
  let maxTime = -1;
  for (let i = 0; i < distance.length; i++) {
    if (distance[i] !== Infinity && distance[i] > maxTime) {
      maxTime = distance[i];
    }
  }
  return [cnt - 1, maxTime];

  // 필요함수들
  function get_smallest_node() {
    let min = Infinity;
    let minIdx = 1;
    for (let i = 1; i <= N; i++) {
      if (!visited[i] && distance[i] < min) {
        min = distance[i];
        minIdx = i;
      }
    }
    return minIdx;
  }
  function makeGraph(edges) {
    let graph = Array(N + 1)
      .fill(0)
      .map(() => Array(N + 1).fill(Infinity));

    for (let i = 0; i < M; i++) {
      let [from, to, value] = edges[i];
      graph[from][to] = value;
    }
    return graph;
  }
}

console.log(
  solution(3, 2, 1, [
    [1, 2, 4],
    [1, 3, 2],
  ])
); // [2, 4]
console.log(
  solution(4, 3, 1, [
    [1, 2, 4],
    [1, 3, 2],
    [3, 4, 5],
  ])
); // [2, 4]
// console.log(
//   solution(6, 11, 1, [
//     [1, 2, 2],
//     [1, 3, 5],
//     [1, 4, 1],
//     [2, 3, 3],
//     [2, 4, 2],
//     [3, 2, 3],
//     [3, 6, 5],
//     [4, 3, 3],
//     [4, 5, 1],
//     [5, 3, 1],
//     [5, 6, 2],
//   ])
// );

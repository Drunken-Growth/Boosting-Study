// 간단한 다익스트라 알고리즘

// N : 노드의 개수
// M : 간선의 개수
// start : 시작 노드 번호
// links : 각 노드끼리 연결 정보 => [a,b,c] => a번 노드에서 b노드로 가는 비용 = c

// 기본적으로 배열을 만들 때 +1 을 한다. => 노드번호별로 접근하기 쉽게
function solution(N, M, start, links) {
  // 방문한 노드 확인
  const visit = Array(N + 1).fill(false);
  // 항상 거리는 최대로 시작
  const distance = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  // key : 시작점, value = [... [도착점, 비용]]
  const graph = {};
  for (let i = 1; i <= N; i++) {
    graph[i] = [];
  }
  for (let link of links) {
    const [from, to, cost] = link;
    graph[from].push([to, cost]);
  }

  // 방문하지 않은 노드들 중, 가장 최단 거리가 짧은 노드의 번호를 반환
  function get_smallest_node() {
    let min_value = Number.MAX_SAFE_INTEGER;
    let node_number = 0;

    // 0은 없다고 생각!
    for (let i = 1; i < N + 1; i++) {
      if (distance[i] < min_value && !visit[i]) {
        min_value = distance[i];
        node_number = i;
      }
    }
    return node_number;
  }

  // 시작 노드 번호를 넣으면 다익스트라 과정 실행
  function dijkstra(start) {
    distance[start] = 0;
    visit[start] = true;

    for (let link of graph[start]) {
      const [to, cost] = link;
      distance[to] = cost;
    }

    // 시작 노드를 제외한 N-1번 수행하는 작업
    for (let i = 1; i <= N - 1; i++) {
      // 현재 노드에서 연결된 노드들 중에 가장 최단거리를 구함
      const next_node = get_smallest_node();
      // 방문 처리
      visit[next_node] = true;

      // 현재 최단 거리 노드와 연결된 다른 노드들을 확인
      console.log(graph);
      console.log(next_node);
      for (let link of graph[next_node]) {
        const [to, cost] = link;
        // 현재 최단 거리 노드를 거쳐 다음 노드로 갈 때 드는 비용 계산
        const all_cost = cost + distance[next_node];

        // 현재 최단 거리 노드를 거쳐 다음 노드로 갈 때 드는 비용
        // 기존에 다음 노드로 가는 비용이 있었으면 비교! (기본값 = 무한)
        if (all_cost < distance[to]) {
          distance[to] = all_cost;
        }
      }
    }
  }

  dijkstra(start);
  return distance;
}

console.log(
  solution(6, 11, 1, [
    [1, 2, 2],
    [1, 3, 5],
    [1, 4, 1],
    [2, 3, 3],
    [2, 4, 2],
    [3, 2, 3],
    [3, 6, 5],
    [4, 3, 3],
    [4, 5, 1],
    [5, 3, 1],
    [5, 6, 2],
  ])
);

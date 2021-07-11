// 문제

// 어떤 나라에는 N개의 도시가 있다.
// 그리고 각 도시는 보내고자 하는 메시지가 있는 경우, 다른 도시로 전보를 보내서 다른 도시로 해당 메시지를 전송할 수 있다.
// 하지만 X라는 도시에서 Y라는 도시로 전보를 보내고자 한다면, 도시 X에서 Y로 향하는 통로가 설정되어 있어야한다.
// 예를 들어, X에서 Y로 향하는 통로는 있지만, Y에서 X로 향하는 통로가 없다면 Y는 X로 메시지를 보낼 수 없다.
// 또한 통로를 거쳐 메시지를 보낼 때는 일정 시간이 소요된다.

// 어느날 C라는 도시에서 위급 상황이 발생했다.
// 그래서 최대한 많은 도시로 메시지를 보내고자 한다.
// 메시지는 도시 C에서 출발해 각 도시 사이에 설치된 통로를 거쳐, 최대한 많이 퍼져나갈 것이다.
// 각 도시의 번호와 통로가 설치되어 있는 정보가 주어졌을 때,
// 1. 도시 C에서 보낸메시지를 받게되는 도시의 개수는 총 몇 개이며
// 2. 도시들이 모두 메시지를 받는데까지 걸리는 시간은 얼마인지 계산해라!

// N : 도시의 개수
// M : 통로의 개수
// C : 메시지를 보내고자 하는 도시
// edges : [X, Y, time] => X에서 Y로 이어지는 통로가 있으며, 메시지가 전달되는 시간 C

// 풀이
// 다익스트라 알고리즘!
function solution(N, M, C, edges) {
  const distance = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  const visit = Array(N + 1).fill(false);

  const graph = {};
  for (let i = 1; i <= N; i++) {
    graph[i] = [];
  }
  for (let edge of edges) {
    const [from, to, time] = edge;
    graph[from].push([to, time]);
  }

  // 방문하지 않은 노드들 중, 가장 최단 거리가 짧은 노드들의 번호를 반환
  function get_smallest_node() {
    let min_value = Number.MAX_SAFE_INTEGER;
    let node_number = 0;

    for (let i = 1; i <= N; i++) {
      if (distance[i] < min_value && !visit[i]) {
        min_value = distance[i];
        node_number = i;
      }
    }
    return node_number;
  }

  function dijkstra(start) {
    distance[start] = 0;
    visit[start] = false;

    for (let x of graph[start]) {
      const [to, time] = x;
      distance[to] = time;
    }

    for (let i = 1; i <= N - 1; i++) {
      const next_node = get_smallest_node();
      visit[next_node];

      for (let x of graph[next_node]) {
        const [to, time] = x;
        const plus_time = time + distance[next_node];

        if (plus_time < distance[to]) {
          distance[to] = all_cost;
        }
      }
    }
  }

  dijkstra(C);
  const send_city = distance.filter(
    (el) => el > 0 && el !== Number.MAX_SAFE_INTEGER
  );
  const max_time = Math.max(...send_city);
  return [send_city.length, max_time];
}

console.log(
  solution(3, 2, 1, [
    [1, 2, 4],
    [1, 3, 2],
  ])
); // 2 4

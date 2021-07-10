function solution(N, road, K) {
  // A) 그래프만들기
  let graph = [];

  for (let i = 0; i < N + 1; i++) {
    graph[i] = new Array(N + 1).fill(Infinity);
  }

  for (let i = 0; i < road.length; i++) {
    let [from, to, distance] = road[i];
    let value = graph[from][to];
    if (!value) {
      graph[from][to] = distance;
      graph[to][from] = distance;
    } else {
      let minVal = Math.min(value, distance);
      graph[from][to] = minVal;
      graph[to][from] = minVal;
    }
  }
  let visited = Array(N + 1).fill(false);
  let distance = Array(N + 1).fill(Infinity);

  // 방문하지 않은 노드 중 가장 짧은 것 리턴
  function get_smallest_node() {
    let min = Infinity;
    let smallNodeIdx = 0;
    distance.forEach((dis, idx) => {
      if (!visited[idx] && dis < min) {
        min = dis;
        smallNodeIdx = idx;
      }
    });
    return smallNodeIdx;
  }

  // 초기값 설정
  distance = graph[1];
  distance[1] = 0;
  visited[1] = true;
  // 시작노드 빼고 한 번씩 방문하며 거리 갱신
  for (let i = 2; i < N + 1; i++) {
    let now = get_smallest_node();
    visited[now] = true;
    // now에서 연결된 노드들까지의 거리와, 현재 distance와 비교
    for (let j = 1; j < graph[now].length; j++) {
      let cost = distance[now] + graph[now][j];
      if (cost < distance[j]) {
        distance[j] = cost;
      }
    }
  }
  let cnt = 0;
  distance.map((el) => {
    if (el <= K) cnt++;
  });
  // console.log(distance)
  return cnt;
}

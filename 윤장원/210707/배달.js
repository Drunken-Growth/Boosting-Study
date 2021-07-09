// https://programmers.co.kr/learn/courses/30/lessons/12978?language=javascript
// 다익스트라 알고리즘
function solution(N, road, K) {
  const visited = Array.from({ length: N + 1 }, () => Infinity);
  const graph = Array.from({ length: N + 1 }, () => []);

  // 그래프 생성
  for (const [u, v, w] of road) {
      graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  // 시작 노드, 배달 시간
  const Q = [[1, 0]];
  // 방문 처리
  visited[1] = 0;

  while (Q.length) {
    const [node, time] = Q.shift();
    const next = graph[node];
    for (let i = 0; i < next.length; i++) {
      const [nextNode, nextTime] = next[i];
      const sumDelivery = time + nextTime;
      if (visited[nextNode] > visited[node] + nextTime) {
        visited[nextNode] = visited[node] + nextTime;
        Q.push([nextNode, sumDelivery]);
      }
    }
  }
  const result = visited.filter((x) => x <= K).length;
  return result;
}
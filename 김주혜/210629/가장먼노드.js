/* 프로그래머스 - 가장 먼 노드 (최단거리)
    1. BFS 탐색
    2. 인접노드 필터 조건
      2-1. 새 거리가 현재 최소거리보다 작은지
      2-2. cycle 없는지
 */

function solution(n, vertex) {
  let graph = makeGraph(vertex);
  let root = Array(n + 1)
    .fill(0)
    .map((_, i) => i);
  let visited = Array(n).fill(Infinity);
  visited[0] = 0;
  let Q = [1];
  while (Q.length) {
    if (!visited.filter((el) => el === Infinity).length) break;
    let v = Q.shift();
    let reachables = filterNode(v, graph[v]);
    Q.push(...reachables);
  }
  let max = Math.max(...visited);
  return visited.filter((n) => n === max).length;

  // 1) cycle 없고 2) 최소거리인 것만 필터링
  function filterNode(cur, nodes) {
    return nodes.filter((el) => {
      if (root[el] !== root[cur] && visited[el - 1] > visited[cur - 1]) {
        root[el] = root[cur];
        visited[el - 1] = visited[cur - 1] + 1;
        return true;
      }
    });
  }

  function makeGraph(arr) {
    let graph = {};
    arr.forEach((node) => {
      let [from, to] = node;
      if (!graph[from]) graph[from] = [to];
      else graph[from].push(to);
      if (!graph[to]) graph[to] = [from];
      else graph[to].push(from);
    });
    return graph;
  }
}

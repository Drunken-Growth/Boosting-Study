function solution(n, m, k, x, map) {
  const map_graph = Array.from({ length: n + 1 }, () => []);
  map.forEach(([from, to]) => {
    map_graph[from] = [...map_graph[from], to];
  });

  const cities = Array.from({ length: n + 1 }, () => -1);
  cities[x] = 0;
  let q = [x];

  while (q.length !== 0) {
    let cur_city = q.shift();
    for (let i = 0; i < map_graph[cur_city].length; i++) {
      if (cities[map_graph[cur_city][i]] === -1) {
        cities[map_graph[cur_city][i]] = cities[cur_city] + 1;
        q.push(map_graph[cur_city][i]);
      }
    }
  }

  const answer = [];

  for (let i = 0; i < cities.length; i++) {
    if (cities[i] === k) {
      answer.push(i);
    }
  }

  return answer;
}
console.log(
  solution(4, 4, 2, 1, [
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ])
); // 4
console.log(solution(4, 3, 2, 1, [1, 2], [1, 3], [1, 4])); // -1
console.log(
  solution(4, 4, 1, 1, [
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ])
); // 2, 3

/**
 * 최단거리 => bfs로 문제를 푼다.
 * 1. x부터 시작해서 방문 표시를 하고, 모든 도시를 dist로 가중치 체크를 한다.
 * 2. 가중치가 k와 같으면 해당 노드를 반환
 * 3. 노드는 오름 차순으로 반환한다. 만약 해당 거리가 없으면 -1을 반환
 */

// 문제

// 어떤 나라에는 1~N 번까지 도시와 M개의 단방향 도로가 존재한다. 모든 도로의 거리는 1이다.
// 이때, 특정한 도시 X로부터 출발해 도달할 수 있는 모든 도시 중에서, 최단거리가 정확히 X인 모든 도시의 번호를 출력해라
// X -> X의 최단거리는 항상 0이다.

// 해답 참고
function solution(N, M, K, X, roads) {
  const road_graph = Array(N + 1)
    .fill(0)
    .map(() => []);
  roads.forEach(([from, to]) => {
    road_graph[from] = [...road_graph[from], to];
  });

  const distance = Array(N + 1).fill(-1);
  distance[X] = 0;

  const queue = [X];
  while (queue.length > 0) {
    const now = queue.shift();
    for (let next_city of road_graph[now]) {
      if (distance[next_city] === -1) {
        distance[next_city] = distance[now] + 1;
        queue.push(next_city);
      }
    }
  }
  const answer = [];
  for (let i = 0; i < distance.length; i++) {
    if (distance[i] === K) {
      answer.push(i);
    }
  }
  return answer;
}

// 내 풀이
// function solution(N, M, K, X, roads) {
//   const road_graph = {};
//   for (let i = 1; i < N; i++) {
//     road_graph[i] = [];
//   }
//   roads.forEach(([from, to]) => {
//     road_graph[from].push(to);
//   });

//   const answer = [];
//   for (let i = 1; i <= N; i++) {
//     if (X !== i) {
//       const shortest_distance = bfs_find_shortest_distance(X, i);
//       if (shortest_distance === K) {
//         answer.push(i);
//       }
//     }
//   }
//   return answer;

//   function bfs_find_shortest_distance(from, to) {
//     const queue = [[from, 0]]; // [현재위치, 이동 수]

//     while (true) {
//       const [city, count] = queue.shift();
//       if (city === to) return count;

//       const possible_move = road_graph[city];
//       for (let next_city of possible_move) {
//         queue.push([next_city, count + 1]);
//       }
//     }
//   }
// }

console.log(
  solution(4, 4, 2, 1, [
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ])
);

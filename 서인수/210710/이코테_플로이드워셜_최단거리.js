/*
플로이드워셜 알고리즘이란

 - 모든지점에서 다른 모든 지점까지의 최딘걍로를 모두 구해야하는 경우 사용 (2차원행렬로 최단거리표를 구하게 된다.)

 <-> 다익스트라 차이점
 1. 다익스트라는 시작지점이 주어지기 때문에, 특정한 점에서 다른 지점까지의 최단경로를 구한다(distance배열이 1차원) 
 2. 다익스트라는 본질적으로 그리디알고리즘 (현재노드에서 최선선택), 플로이드워셜은 점화식을 통해 최단거리를 선택하는 DP(다이내믹프로그래밍)에 가깝다.

 -시간복잡도
노드의 개수(N)민큼 반복동작을 수행하며, 각 단계에서 O(N^2)연산을 통해, 현재노드를 거쳐가는 모든 경로를 고려한다. 
따라서 N * N^2으로 총 O(N^3)이다.

-Dab(a에서 b로의 최단거리) = Min(Dab, Dak + Dkb) 
: a->b 으로 최단거리는 a->k+ k->b 의 거리의 합과 비교하여 선택할 수 있다.
: 직접가는 것보다 거쳐가는 것이 빠를 때 거리표 갱신

- 구현과정
1. 1번 노드를 거쳐가능 경우 고려 (k===1일때)
1.1 N-1 P 2 (자기자신 뺀 노드수에서 2가지 선택하는 경우 가능)


*/
function solution(N, M, edges) {
  //초가 그래프 생성
  let graph = Array(N + 1)
    .fill(0)
    .map(() => Array(N + 1).fill(Infinity));

  // 자기자신으로의 거리는 0으로 바꾸어줌
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      if (i === j) graph[i][j] = 0;
    }
  }
  // 각 노드간의 거리르 graph에 기록한다.
  for (let i = 0; i < M; i++) {
    let [from, to, value] = edges[i];
    graph[from][to] = value;
  }

  // 2.노드를 순회하며, 해당 노드를 거쳐갈 경우의 최단거리 갱신가능성을 체크함
  for (let cur = 1; cur < N + 1; cur++) {
    for (let from = 1; from < N + 1; from++) {
      for (let to = 1; to < N + 1; to++) {
        graph[from][to] = Math.min(
          graph[from][to],
          graph[from][cur] + graph[cur][to]
        );
      }
    }
  }
  return graph;
}
console.log(
  solution(4, 7, [
    [1, 2, 4],
    [1, 4, 6],
    [2, 1, 3],
    [2, 3, 7],
    [3, 1, 5],
    [3, 4, 4],
    [4, 3, 2],
  ])
);
/*[
    [ Infinity, Infinity, Infinity, Infinity, Infinity ],
    [ Infinity, 0, 4, 8, 6 ],
    [ Infinity, 3, 0, 7, 9 ],
    [ Infinity, 5, 9, 0, 4 ],
    [ Infinity, 7, 11, 2, 0 ]
  ]
  */

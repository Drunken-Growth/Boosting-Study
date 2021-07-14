// 문제

// 방문 판매원 A는 많은 회사가 모여 있는 공중 미래 도시에 있다.
// 공중 미래 도시에는 1 ~ N까지 회사가 있는데 특정 회사 끼리는 서로 도로를 통해 연결되어 있다.
// 방문 판매원 A는 현재 1번 회사에 위치해 있고, X번 회사에 방문해 물건을 판매하고자 한다.

// 공중 미래 도시에서 특정 회사에 도착하기 위한 방법은 회사끼리 연결되어 있는 도로를 이용하는 방법이 유일하다.
// 또한 연결된 2개의 회사는 양방향으로 이동할 수 있다.
// 공중 미래 도시에서의 도로는 마하의 속도로 사람을 이동시켜주기 때문에 특정 회사와 다른 회사가 도로로 연결디어 있다면,
// 정확히 1만큼의 시간으로 이동할 수 있다.

// 또한 오늘 방문 판매원 A는 기대하던 소개팅에도 참석하고자 한다.
// 소개팅의 상대는 K번 회사에 존재한다.
// 방문 판매원 A는 X번 회사에 가서 물건을 판매학 ㅣ전에 먼저 소개팅 상대의 회사에 찾아가서 함께 거피를 마실 예정이다.
// 따라서 방문 판매원 A는 1번회사에서 출발해 K번 회사에 방문하고 X번 회사로 가는 것이 목표다.
// 이때 방문 판매원 A는 가능한 빠르게 이동하고자 한다.

// 방푼 판매원이 회사 사이를 이동하게 되는 최소 시간을 계산해라
// 소개팅 상태방과 커피를 마시는 시간은 고려하지 않는다.

// N : 전체 회사의 개수
// M : 경로의 개수
// roads : 연결된 회사들
// X : 방문할 회사
// K : 소개팅 장소 회사

// 풀이
// 다익스트라 vs 플로이드 워셜

// 플로이드 워셜을 통해 1 => K + K => X 을 구하면 될 듯?
function solution(N, M, roads, X, K) {
  const graph = Array(N + 1)
    .fill(0)
    .map(() => Array(N + 1).fill(Number.MAX_SAFE_INTEGER));

  // 자기 자신으로 가는 경로 0으로 초기화
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) {
        graph[i][j] = 0;
      }
    }
  }

  // 양방향이라서
  for (let edge of roads) {
    const [from, to] = edge;
    graph[from][to] = 1;
    graph[to][from] = 1;
  }

  // 양방향 이므로 for문 좀 줄이기?
  for (let k = 1; k <= N; k++) {
    for (let from = 1; from <= N; from++) {
      for (let to = 1; to <= from; to++) {
        graph[from][to] = Math.min(
          graph[from][to],
          graph[from][k] + graph[k][to]
        );
        graph[to][from] = Math.min(
          graph[to][from],
          graph[to][k] + graph[k][from]
        );
      }
    }
  }

  console.log(graph);
  return graph[1][K] + graph[K][X] < Number.MAX_SAFE_INTEGER
    ? graph[1][K] + graph[K][X]
    : -1;
}

console.log(
  solution(
    5,
    7,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 4],
      [3, 4],
      [3, 5],
      [4, 5],
    ],
    4,
    5
  )
);

console.log(
  solution(
    4,
    2,
    [
      [1, 3],
      [2, 4],
    ],
    3,
    4
  )
); // -1

// 문제

// 동물원에서 막 특별한 원숭이 한 마리가 세상 구경을 하고 있다.
// 어느 날 원숭이는 '평화로운 마을'에 잠시 머물렀는데 마침 마을 사람들은 도로 공사 문제로 머리를 맞대고 회의 중이었다.

// 마을은 N개의 집과 그 집들을 연결하는 M개의 길로 이루어져 있다. 길은 어느 방향으로든지 다닐 수 있는 편리한 길이다.
// 그리고 길마다 길을 유지하는데 드는 유지비가 있다.

// 마을의 이장은 마을을 2개의 분리된 마을로 분할할 계획을 세우고 있다.
// 마을을 분할할 때는 각 분리된 마을 안에 집들이 서로 연결되도록 분할해야 한다.
// 각 분리된 마을 안에 있는 임의의 두 집 사이에 경로가 항상 존재해야 한다는 뜻이다.
// 마을에는 집이 하나 이상 있어야 한다.

// 그러다 마을에 길이 너무 많다고 생각했다.
// 분리된 두 마을 사이에 있는 길들은 필요가 없으므로 없앨 수 있다.
// 그리고 각 분리된 마을 안에서도 임의의 두 집 사이에 경로가 항상 존재하게 하면서 길을 더 없앨 수 있다.
// 마을의 이장은 위 조건을 만족하도록 길들을 모두 없애고 나머지 길의 유지비의 합을 최소로 하고 싶다.
// 이를 구하는 프로그램을 작성해라!

// N : 집의 개수
// M : 길의 개수
// roads : [a, b, c] => a번과 b집을 연결하는 길의 유지비가 c다.

// 풀이
// 두 개의 마을 => 2개의 신장 트리
// 전부 잇는데 최소비용 => 크루스칼

// 크루스칼 알고리즘 => 1개의 최소 신장트리 생성
// => 두 개의 마을을 생성하고 싶다 => 큰 순서대로 1개의 비용이 큰 간선을 제거
function solution(N, M, roads) {
  function find_parent(parent, x) {
    if (parent[x] !== x) {
      parent[x] = find_parent(parent, parent[x]);
    }
    return parent[x];
  }

  function union_parent(parent, a, b) {
    a = find_parent(parent, a);
    b = find_parent(parent, b);

    if (a < b) {
      parent[b] = a;
    } else {
      parent[a] = b;
    }
  }

  const parent = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    parent[i] = i;
  }

  roads.sort((a, b) => a[2] - b[2]);

  let all_cost = 0;
  let last = 0;
  for (let road of roads) {
    const [a, b, cost] = road;

    if (find_parent(parent, a) !== find_parent(parent, b)) {
      union_parent(parent, a, b);
      all_cost += cost;
      last = cost;
    }
  }
  return all_cost - last;
}

console.log(
  solution(7, 12, [
    [1, 2, 3],
    [1, 3, 2],
    [3, 2, 1],
    [2, 5, 2],
    [3, 4, 4],
    [7, 3, 6],
    [5, 1, 5],
    [1, 6, 2],
    [6, 4, 1],
    [6, 5, 3],
    [4, 5, 3],
    [6, 7, 4],
  ])
); // 8

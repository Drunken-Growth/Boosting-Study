// 크루스칼 알고리즘

// 1. 간선 데이터를 비용에 따라 오름차순으로 정렬
// 2. 간선을 하나씩 확인하며 현재의 간선이 사이클을 발생시키는 지 확인한다.
//   2-1. 사이클이 발생하지 않는 경우 최소 신장 트리에 포함
//   2-2. 사이클이 발생하는 경우 최소 신장 트리에 포함하지 않는다.
// 3. 모든 간선에 대해 2번 과정 반복

// N : 노드의 개수
// E : 간선의 개수
// edges : 간선 정보 [a, b, c] => a, b가 c의 비용으로 연결되어 있다.

function kruskal(N, E, edges) {
  // 부모 찾는 함수
  function find_parent(parent, x) {
    if (parent[x] !== x) {
      parent[x] = find_parent(parent, parent[x]);
    }
    // 여기 else 붙히면 안됨!!
    return parent[x];
  }

  // 두 원소가 속한 집합 합치기
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

  // 간선을 비용 순대로 오름차순
  edges.sort((a, b) => a[2] - b[2]);

  let all_cost = 0;
  // 간선을 하나씩 확인하며, 사이클이 발생하는지, 발생하지 않는 지 확인!
  for (let edge of edges) {
    const [a, b, cost] = edge;

    // 사이클을 발생하지 않는 경우에만 집합에 포함
    if (find_parent(parent, a) !== find_parent(parent, b)) {
      union_parent(parent, a, b);
      all_cost += cost;
    }
  }
  return all_cost;
}

console.log(
  kruskal(7, 9, [
    [1, 2, 29],
    [1, 5, 75],
    [2, 3, 35],
    [2, 6, 34],
    [3, 4, 7],
    [4, 6, 23],
    [4, 7, 13],
    [5, 6, 53],
    [6, 7, 25],
  ])
);

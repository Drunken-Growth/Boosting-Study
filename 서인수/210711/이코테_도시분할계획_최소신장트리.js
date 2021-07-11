// 문제이해
// 간선들이 주어질 때, 최소신장트리를 2개를 만들고, 그 떄의 최소비용값을 구하는 문제

// 문제 풀이
// 2개의 마을로 구분하는 것은, 우선 하나의 최소신장트리를 만든다음, 가장 긴 간선을 제거함으로 만들 수 있다.

// 최소신장트리 만들기 (by크루스칼)
// 0. 간선들을 오름차순으로 정렬
// 1. 연결된 두개의 노드의 루트노드 찾아 비교
// 1.1. 루트노드가 연결되어있다면 PASS
// 1.2  루트노드 연결되어 있지 않다면 UNION && result에 cost++

function solution(N, M, roads) {
  // 0. 변수선언
  let result = [];
  let parent = Array(N + 1).fill(0);
  parent.map((_, idx) => (parent[idx] = idx));

  // 0. 오름차순 정렬
  roads.sort((a, b) => a[2] - b[2]);

  //1. 간선순회
  for (let i = 0; i < M; i++) {
    let [a, b, cost] = roads[i];
    if (find_parent(parent, a) === find_parent(parent, b)) continue;
    // else
    union_parent(parent, a, b);
    result.push(cost);
  }
  console.log(parent);
  let sum = result.reduce((acc, cur) => acc + cur);
  let last = Math.max(...result);
  return sum - last;

  function find_parent(parent, x) {
    if (parent[x] !== x) {
      parent[x] = find_parent(parent, parent[x]);
    }
    return parent[x];
  }
  function union_parent(parent, a, b) {
    let root_a = find_parent(parent, a);
    let root_b = find_parent(parent, b);
    if (root_a < root_b) {
      parent[root_b] = root_a;
    } else {
      parent[root_a] = root_b;
    }
  }
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
);

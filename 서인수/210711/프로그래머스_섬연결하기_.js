// 모든 노드를 잇는 최소비용을 구하는 문제
// 최소신장거리 구하기 - 크루스칼알고리즘 사용
// 크루스칼 알고리즘은 간선을 오름차순 정렬한 후, 두 개의 노드가 같은 집합이면 PASS, 다른 집합이면 Union연산 실행(연결하기)

function solution(n, costs) {
  let answer = 0;
  let parent = Array(n).fill(0);
  parent.map((_, idx) => (parent[idx] = idx));
  // 0. 오름차순 정렬
  costs.sort((a, b) => a[2] - b[2]);

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
  // 1. costs 순회하며 노드간 연결 진행
  for (let i = 0; i < costs.length; i++) {
    let [a, b, cost] = costs[i];
    if (find_parent(parent, a) === find_parent(parent, b)) continue;
    union_parent(parent, a, b);
    answer += cost;
  }

  return answer;
}

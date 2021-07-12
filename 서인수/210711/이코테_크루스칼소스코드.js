//크루스칼 소스코드
// 최소 신장트리 비용을 구하는 알고리즘

// 0. 최소비용합 변수 및 각 노드의 root노드를 담은 root_parent 배열선언
// 1. 간선을 오름 차순 정렬
// 2. 최소 비용의 간선의 두노드를 비교
//  2.1 두 노드의 루트노드가 같다면 PASS(같은집합)
//  2.2 두 노드의 루트노드가 다르다면 Union연산 진행하고, 해당비용을 min_cost_sum에 더해줌

//+ find_parent
// 1. 부모테이블[x] !== x 면 재귀적으로 타고 올라가, 루트노드값을 리턴하도록 한다.

//+ union_parent
// 1. 두 개 노드의 루트노드 값을 구한 후 비교하여, 작은 루트를 루트노드로 지정한다.

function solution(N, M, edges) {
  let min_cost_sum = 0;
  // 0. parent테이블 선언
  let root_parent = Array(N + 1).fill(0);
  root_parent.map((_, idx) => (root_parent[idx] = idx));

  //1. 연결된 간선을 오름차순 정렬
  edges.sort((a, b) => a[2] - b[2]);

  //2. 작은 간선을 하나씩 꺼내며, Union Or Pass
  for (let i = 0; i < M; i++) {
    let [a, b, cost] = edges[i];

    let root_a = find_parent(root_parent, a);
    let root_b = find_parent(root_parent, b);

    if (root_a === root_b) continue;
    // 같지 않다면 Union 연산
    union_parent(root_parent, a, b);
    min_cost_sum += cost;
  }
  return min_cost_sum;
}

function find_parent(root_parent, x) {
  if (root_parent[x] !== x) {
    root_parent[x] = find_parent(root_parent, root_parent[x]);
  }
  return root_parent[x];
}

function union_parent(root_parent, a, b) {
  let root_a = find_parent(root_parent, a);
  let root_b = find_parent(root_parent, b);

  if (root_a < root_b) {
    root_parent[root_b] = root_a;
  } else {
    root_parent[root_a] = root_b;
  }
}
console.log(
  solution(7, 9, [
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

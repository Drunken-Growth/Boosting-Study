function disjoint(N, M, edges) {
  // 루트노드를 찾을 때 까지 거슬러 올라간다. 루트노드는 노드번호와 부모노드값이 일치할 때이다.
  function find_parent(parent, x) {
    if (parent[x] !== x) {
      return find_parent(parent, parent[x]);
    }
    return x;
  }

  function union_parent(parent, a, b) {
    //[ 0, 1, 2, 2, 1, 5, 6]
    // 2,4
    //각각의 루트노드를 찾고, 해당 값을 비교하여, 작은노드로 부모를 갱신한다.
    let root_a = find_parent(parent, a); //2
    let root_b = find_parent(parent, b); //

    if (root_a < root_b) {
      parent[root_b] = root_a;
    } else {
      parent[root_a] = root_b;
    }
  }
  // 0. 노드의 개수만큼 부모테이블을 초기화한다.
  let parent = Array(N + 1).fill(0);
  parent.map((_, idx) => (parent[idx] = idx));

  // 1. 부모테이블을 가지고 union연산진행
  for (let i = 0; i < M; i++) {
    let [a, b] = edges[i];
    union_parent(parent, a, b);
  }
  // 각 원소가 속한 집합(루트노드)
  let set = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    set[i] = find_parent(parent, i);
  }
  console.log("각 원소가 속한 집합:" + set);
  console.log("최종 부모테이블: " + parent);
  return parent;
}

console.log(
  disjoint(6, 4, [
    [1, 4],
    [2, 3],
    [2, 4],
    [5, 6],
  ])
);

// 경로압축법
// 부모테이블이 현재의 부모노드를 가르키는 것이 아니라, 아예 루트노드를 가리키게 함으로
// find연산의 최악의 시간복잡도(O(VM)) (노드개수가 간선만큼 확인하는 것)
// (4,5)(3,4)(2,3)(1,2)일때 find 연산은 각각N(===V)번작동

// 루트노드를 끝까지 찾아 리턴하게 함으로 해결할 수 있다.

function find_parent(parent, x) {
  if (parent[x] !== x) {
    parent[x] = find_parent(parent, parent[x]);
  }
  return parent[x];
}

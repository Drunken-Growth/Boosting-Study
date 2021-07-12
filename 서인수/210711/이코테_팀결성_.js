// 문제 이해
// command의 첫 인자가 0 이면 뒤의 두개의 노드를 합치는 연산을 진행하고,
// command의 첫 인자가 1 이면 뒤의 두개의 노드가 연결되어 있는가를 리턴한다.

// 전형적인 UnionFind 문제

// UnionFind 풀이방법
// 0. root노드를 담은 parent 배열 선언
// 1. find_parent로 각 노드의 루트노드를 찾아 비교
// 2. 더 작은 루트노드의 값으로 parent배열 갱신

function solution(N, M, commands) {
  let result = [];
  let parent = Array(N + 1).fill(0);
  parent.map((_, idx) => (parent[idx] = idx));
  for (let i = 0; i < M; i++) {
    let [isCheckTeam, a, b] = commands[i];

    if (isCheckTeam === 1) {
      result.push(
        find_parent(parent, a) === find_parent(parent, b) ? "YES" : "NO"
      );
    } else if (isCheckTeam === 0) {
      union_parent(parent, a, b);
    }
  }
  console.log(parent);
  return result;

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
  solution(7, 8, [
    [0, 1, 3],
    [1, 1, 7],
    [0, 7, 6],
    [1, 7, 1],
    [0, 3, 7],
    [0, 4, 2],
    [0, 1, 1],
    [1, 1, 1],
  ])
);

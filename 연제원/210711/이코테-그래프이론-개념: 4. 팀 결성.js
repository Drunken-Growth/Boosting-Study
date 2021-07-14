// 문제

// 학교에서 학생들에게 0 ~ N 번까지 번호를 부여했다.
// 처음에는 모든 학생이 서로 다른 팀으로 구분되어, 총 N+1개의 팀이 존재한다.
// 이때 선생님은 '팀 합치기'연산과 '같은 팀 여부 확인' 연산을 사용할 수 있다.

// 1. '팀 합치기' 연산은 두 팀을 합치는 연산이다.
// 2. '같은 팀 여부 확인' 연산은 특정한 두 학생이 같은 팀에 속하는지를 확인하는 연산이다.

// 선생님이 M개의 연산을 수행할 수 있을 때, '같은 팀 여부 확인' 연산에 대한 결과를 출력해라

// N
// M
// team = 팀 합치기 [0, a, b], 같은 팀 여부 확인 [1, a, b]

// 풀이
// 서로소 집합 알고리즘 사용
function solution(N, M, team) {
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
  for (let i = 0; i < N + 1; i++) {
    parent[i] = i;
  }

  const result = [];
  for (let x of team) {
    const [kind, a, b] = x;
    // kind : 0 => 팀 합치기
    // kind : 1 => 같은 팀 여부 확인
    if (kind === 0) {
      union_parent(parent, a, b);
    } else if (kind === 1) {
      if (find_parent(parent, a) === find_parent(parent, b)) {
        result.push("YES");
      } else {
        result.push("NO");
      }
    }
  }
  return result;
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
); // NO, NO, YES

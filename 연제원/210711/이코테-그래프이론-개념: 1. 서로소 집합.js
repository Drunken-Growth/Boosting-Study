// N : 노드의 개수
// E : 간선의 개수
// unions : 유니온 연산 (노드들간의 관계)

function solution(N, E, unions) {
  // 부모 노드를 찾는 함수
  // 루트 노드가 아니라면, 루트 노드를 찾을 때 까지 재귀적으로 호출
  // 경로 기본
  // function find_parent(parent, x) {
  //   if (parent[x] !== x) {
  //     return find_parent(parent, parent[x]);
  //   }
  //   return x;
  // }

  // 경로 개선
  function find_parent(parent, x) {
    if (parent[x] !== x) {
      parent[x] = find_parent(parent, parent[x]);
    }
    return parent[x];
  }

  // 두 원소가 속한 집합을 합치기
  function union_parent(parent, a, b) {
    a = find_parent(parent, a);
    b = find_parent(parent, b);

    if (a < b) {
      parent[b] = a;
    } else {
      parent[a] = b;
    }
  }

  // 부모 테이블 생성 및 자기 자신을 부모로 갖도록 초기화
  const parent = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    parent[i] = i;
  }

  // union 연산을 각각 실행
  for (let i = 0; i < E; i++) {
    const [a, b] = unions[i];
    union_parent(parent, a, b);
  }

  for (let i = 1; i <= N; i++) {
    console.log(`${i}번 노드의 부모 노드는 ${parent[i]}`);
  }

  console.log("-----------------------------");

  for (let i = 1; i <= N; i++) {
    console.log(`${i}번 노드가 속한 집합은 ${find_parent(parent, parent[i])}`);
  }
}

// console.log(
//   solution(6, 4, [
//     [1, 4],
//     [2, 3],
//     [2, 4],
//     [5, 6],
//   ])
// );

// 실제 사용
// => '무방향' 그래프에서 사이클 여부를 판단할 때

// N : 노드 개수
// E : 간선 개수
// unions : 유니온 연산 (노드간의 관계)
function judge_cycle(N, E, unions) {
  // 부모 노드를 찾는다.
  function find_parent(parent, x) {
    if (parent[x] !== x) {
      parent[x] = find_parent(parent, parent[x]);
    } else {
      return parent[x];
    }
  }

  // 두 원소가 속한 집합을 합치기
  function union_parent(parent, a, b) {
    a = find_parent(parent, a);
    b = find_parent(parent, b);

    if (a < b) {
      parent[b] = a;
    } else {
      parent[a] = b;
    }
  }

  // 부모 테이블 만들고, 자기 자신을 부모로 가지도록 초기화
  const parent = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    parent[i] = i;
  }

  let cycle = false;

  // 존재하는 간선에 대해서 수행하기 때문에
  // (1,2), (1,3) 이 있을 때 (2,3)을 자동으로 판단하는 줄 알았는데 아니었음. [(2, 3)에 대해 수행하지 않아서 부모가 같다는 판단을 아예 하지 않음]
  for (let i = 0; i < E; i++) {
    const [a, b] = unions[i];
    // 부모가 같다는 뜻은
    if (find_parent(parent, a) === find_parent(parent, b)) {
      cycle = true;
      break;
    } else {
      union_parent(parent, a, b);
    }
  }

  return cycle ? "사이클이다!" : "사이클이 아니다!";
}

console.log(
  judge_cycle(3, 3, [
    [1, 2],
    [1, 3],
    [2, 3],
  ])
); // "사이클이다!"

console.log(
  judge_cycle(3, 2, [
    [1, 2],
    [1, 3],
  ])
); // "사이틀이 아니다!"

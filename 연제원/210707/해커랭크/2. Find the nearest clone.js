// 문제

// 그래프가 주어진다.
// 가중치는 전부 1이고, 양방향이다.
// 각 노드마다 색이 주어지는데, 짝이 없으면 (혼자만 가지는 색이면) -1을 리턴한다.

// 각 노드는 [노드번호, 색]으로 주어진다.

// 목표
// 같은색을 가진 노드사이의 최소 거리를 구해라, 없으면 -1

// 입력
// n : 노드의 수, m : 간선의 수
// graphFrom <-> graphTo => 0 <= i < m 일 때 graphFrom[i]와 graphTo[i]는 연결된 것 (간선)
// ids : 각 노드의 색 코드 (ids.length === n 이겠지?)
// val : 짝을 찾으려는 색깔

// * 각 노드는 1 ~ n으로 표기 된다!

// 풀이
// 1. val이 있는 곳을 시작점으로 잡음 (for문을 돌리든 뭐하든)
// 2. bfs를 통해 최단 거리를 찾음
//  2-1. 최솟값을 정해놓는다.
//  2-2. 이 최솟값보다 거리가 커진다면 그냥 바로 스탑

function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
  // 각 노드마다 연결된 곳 + 색깔 저장할 것
  const list = {};
  for (let i = 1; i <= graphNodes; i++) {
    list[i] = {
      link: [],
      color: ids[i - 1],
    };
  }

  // 간선 저장
  const edges = graphFrom.map((from, to) => [from, graphTo[to]]);

  // 노드들의 연결 저장
  for (let x of edges) {
    const [from, to] = x;
    list[from]["link"].push(to);
    list[to]["link"].push(from);
  }

  // 찾는 색깔의 위치(노드 번호에 맞게) 저장
  // 사용 예시 => list[color_index[0, 1, ... color_index.length - 1]] 하면 그 노드에 대한 정보가 나온다.
  let color_index = [];
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] === val) {
      color_index.push(i + 1);
    }
  }

  // 우선 목표가 1개뿐이라면 -1 리턴
  if (color_index.length === 1) {
    return -1;
  }
  // 목표 색깔과 같은 노드부터 순환하면서 최단 거리를 찾는다.
  let min_distance = 100001;
  for (let index of color_index) {
    // index = 목표 색깔을 가진 노드 번호
    const { link, color } = list[index]; // 목표 색깔을 가진 노드의 정보

    // 각 노드에서 시작할때마다 방문 확인하는 배열 생성 => 계속 새로 안만들고 공통적으로 사용은 못할라나..?
    const visit = new Array(graphNodes + 1).fill(true);
    visit[0] = false;
    visit[index] = false;
    let queue = []; // 각 요소 [현재 노드 위치, 이동 수]
    for (let next_node_from_start of link) {
      queue.push([next_node_from_start, 1]);
    }

    while (queue.length > 0) {
      const [current_node, count] = queue.shift();
      if (visit[current_node]) {
        visit[current_node] = false;

        if (list[current_node]["color"] === val) {
          min_distance = Math.min(min_distance, count);
          break;
        }

        const next_nodes = list[current_node]["link"];

        for (let next_node of next_nodes) {
          queue.push([next_node, count + 1]);
        }
      }
    }
  }

  // 몰랐는데 연결이 안된 부분도 있을 수 있어서 추가
  if (min_distance === 100001) {
    return -1;
  }
  return min_distance;
}

console.log(findShortest(4, [1, 1, 4], [2, 3, 2], [1, 2, 1, 1], 1)); // 1
console.log(findShortest(4, [1, 1, 4], [2, 3, 2], [1, 2, 3, 4], 2)); // -1
console.log(findShortest(5, [1, 1, 2, 3], [2, 3, 4, 5], [1, 2, 3, 3, 2], 2)); // 3

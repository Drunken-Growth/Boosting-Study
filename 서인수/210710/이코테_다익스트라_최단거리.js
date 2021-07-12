/*
다익스트라 알고리즘
- 음의간선이 없을 때 사용가능
- 실제 GPS 시스템에 사용
- 그리디알고리즘의 일부라고 할 수 있다. (매번 가장 비용이 적은 노드를 선택하는 과정을 반복)

-동작원리
1. 출발노드 설정
2. 최단거리 테이블 초기화
3. 방문하지 않은 노드 중 최단거리 노드 선택
4. 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 최단거리 테이블 갱신
5. 3-4과정 반복

- 특징
- '각 노드에 대한 현재까지의 최단거리 정보를 1차원 배열에 저장하고, 계속 갱신함' [3,1,4,5,4]
- 현재 처리하고 있는 노드를 기준으로 연결된 간선을 확인한다.
- 더 짧은 경로를 찾으면, 갱신하는 것 반복(3번-4번)


-예제로 이해하여 보기
1 준비과정
1.1 출발노드의 거리는 0, 나머지 노드는 무한값(987,654,321등)의 매우 높은 값으로 설정 [0, inf,inf,inf,inf,inf]
1.2.<시작노드처리> 출발노드와 연결된 노드로 가는 비용계산 ( [0, 2, 5, 1, inf,inf ])

3. 가장 거리가 짧은 4번노드(1) 선택 (4번노드 : inf,inf, 3, 0, 1, inf)
3.1 출발에서 4번을 거쳐 4번과 연결된 노드로 가는 거리를 갱신한다. 
3.2 3번노드가는길(1+3 < 5) 이므로 4로 갱신, 5번노드가는 길(1+1 < inf)이므로 2로 갱신
3.3 갱신값 ( [0, 2, 4 ,1 ,2 , inf])

(반복)5. 그 다음 거리가 짧은 2,5번 노드 중 2번노드 선택
 5.1 출발에서 2번노드 거쳐 2번노드와 연결된 노드로 가는 거리를 갱신 
 5.2 갱신할 수 있는 최단거리 없음

 (반복)6. 그 다음 거리 짧은 5번 노드 선택
 6.1 출발에서 5번노드를 거쳐 (엄밀히 따지면 출발-4번-5번) 다음 노드를 가는 거리계산
6.2 3번 노드로 가는 거리 (1+1+1 < 4)으로 3으로 갱신 && 6번노드로 가는 거리 1+1+2 < inf로 4로 갱신
6.3 갱신값 [0,2,3,1,2,4]
*/

function dijkstra_basic(N, m, start, adjList) {
  let graph = [];
  for (let i = 0; i < N + 1; i++) {
    graph[i] = new Array(N + 1).fill(Infinity);
  }
  for (let i = 0; i < adjList.length; i++) {
    let [from, to, distance] = adjList[i];
    let value = graph[from][to];
    if (!value) {
      graph[from][to] = distance;
      graph[to][from] = distance;
    } else {
      let minVal = Math.min(value, distance);
      graph[from][to] = minVal;
      graph[to][from] = minVal;
    }
  }

  // 방문여부 설정
  let visited = Array(N + 1).fill(false);

  // 최단거리 배열
  let distance = Array(N + 1).fill(Infinity);

  // 방문하지 않은 노드 중, 가장 최단 거리가 짧은 노드번호를 반환
  function get_smallest_node() {
    let minValue = Infinity;
    let smallNodeIdx = 0;
    for (let i = 1; i < N + 1; i++) {
      if (distance[i] < minValue && !visited[i]) {
        minValue = distance[i];
        smallNodeIdx = i;
      }
    }
    return smallNodeIdx;
  }

  function dijkstra(start) {
    //1. 시작노드
    //시작노드 초기화
    distance[start] = 0;
    visited[start] = true;

    //1.2 시작노드에서의 distance 설정
    for (let i = 1; i < N + 1; i++) {
      if (start === i) continue;
      distance[i] = graph[start][i];
    }

    // 나머지 노드를 짧은 거리순으로 방문하며, distance 갱신
    for (let i = 0; i < N - 1; i++) {
      // 현재 가장 짧은 거리의 노드
      let now = get_smallest_node();
      visited[now] = true;

      // now(방문해야하는 노드)를 거쳐 다른 노드에 갈때 거리와 , 현재 거리배열과 비교하며 갱신
      for (let j = 1; j < graph[now].length; j++) {
        let cost = distance[now] + graph[now][j];
        if (cost < distance[j]) {
          distance[j] = cost;
        }
      }
    }
  }
  dijkstra(start);
  return distance;
}

console.log(
  dijkstra_basic(6, 11, 1, [
    [1, 2, 2],
    [1, 3, 5],
    [1, 4, 1],
    [2, 3, 3],
    [2, 4, 2],
    [3, 2, 3],
    [3, 6, 5],
    [4, 3, 3],
    [4, 5, 1],
    [5, 3, 1],
    [5, 6, 2],
  ])
);

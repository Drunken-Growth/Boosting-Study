// (check)
// 2차풀이 (ref참고)
// i와 j의 순서를 바꿈으로 해결 -> 어떻게.. 보아도 잘 이해가 되지느 않는다.

function solution(n, results) {
  // 0. 그래프만들기
  let graph = makeGraph();
  console.log(graph);
  // 1. 순회하며 승부값 업데이트
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] === null) continue;
      if (graph[i][j] === 1) {
        //  i  > j
        update(graph, i, j, 1); // j열로 가서 j가 이기 것들 모두 i가 이기도록 처리
      } else {
        update(graph, i, j, 0); // j열로 가서 j가 진것들 모두 i가 지도록처리
      }
    }
  }
  console.log(graph);
  // 2. 순회하며 승부값 업데이트2 (수정필요부분)
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      if (graph[i][j] === null) continue;
      if (graph[i][j] === 1) {
        //  i  > j
        update(graph, i, j, 1); // j열로 가서 j가 이기 것들 모두 i가 이기도록 처리
      } else {
        update(graph, i, j, 0); // j열로 가서 j가 진것들 모두 i가 지도록처리
      }
    }
  }
  let answer = 0;

  // 3. 승부결과완성, 순위가 결정된 선수 리턴하기 (0번인덱스, 자기자신 말고 다 차있으면, 순위가 결정된 선수)
  graph.map((el) => {
    let cnt = 0;
    el.map((el2) => {
      if (el2 === null) cnt++;
    });
    if (cnt === 2) answer++;
  });

  return answer;

  // a가 b를 이기거나(졌다면) b가 이긴(진) 모든 선수를 a에게 반영하는 함수
  function update(graph, a, b, isWin) {
    for (let i = 1; i <= n; i++) {
      if (graph[b][i] === isWin) {
        graph[a][i] = isWin;
      }
    }
  }
  // 그래프 만들기
  function makeGraph() {
    let graph = Array(n + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(null));

    results.map((el) => {
      let [win, lose] = el;
      graph[win][lose] = 1;
      graph[lose][win] = 0;
    });
    return graph;
  }
}

// 1차풀이
// [[1, 4], [4, 2], [2, 5], [5, 3]] (answer: 5) 에서 값이 중간에 추가 되어 반영이 안되는 경우 생긴다.
// 따라서 update 하는 for문을 한 번 더 사용하는 것으로 (주먹구구식으로) 해결

function solution(n, results) {
  // 0. 그래프만들기
  let graph = makeGraph();
  console.log(graph);
  // 1. 순회하며 승부값 업데이트
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] === null) continue;
      if (graph[i][j] === 1) {
        //  i  > j
        update(graph, i, j, 1); // j열로 가서 j가 이기 것들 모두 i가 이기도록 처리
      } else {
        update(graph, i, j, 0); // j열로 가서 j가 진것들 모두 i가 지도록처리
      }
    }
  }
  console.log(graph);
  // 2. 순회하며 승부값 업데이트2 (수정필요부분)
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] === null) continue;
      if (graph[i][j] === 1) {
        //  i  > j
        update(graph, i, j, 1); // j열로 가서 j가 이기 것들 모두 i가 이기도록 처리
      } else {
        update(graph, i, j, 0); // j열로 가서 j가 진것들 모두 i가 지도록처리
      }
    }
  }
  let answer = 0;

  // 3. 승부결과완성, 순위가 결정된 선수 리턴하기 (0번인덱스, 자기자신 말고 다 차있으면, 순위가 결정된 선수)
  graph.map((el) => {
    let cnt = 0;
    el.map((el2) => {
      if (el2 === null) cnt++;
    });
    if (cnt === 2) answer++;
  });

  return answer;

  // a가 b를 이기거나(졌다면) b가 이긴(진) 모든 선수를 a에게 반영하는 함수
  function update(graph, a, b, isWin) {
    for (let i = 1; i <= n; i++) {
      if (graph[b][i] === isWin) {
        graph[a][i] = isWin;
      }
    }
  }
  // 그래프 만들기
  function makeGraph() {
    let graph = Array(n + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(null));

    results.map((el) => {
      let [win, lose] = el;
      graph[win][lose] = 1;
      graph[lose][win] = 0;
    });
    return graph;
  }
}

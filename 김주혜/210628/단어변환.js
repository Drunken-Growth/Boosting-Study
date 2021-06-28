/* 프로그래머스 단어변환
    1. 인접그래프 생성 (한단어만 다르면 인접한다고 가정)
      - makeGrpah 함수
    2. bfs탐색
      2-1. target 찾으면 count 리턴 (몇번 변환되었는지) 
          - 탐색 깊이가 깊어질때마다 count 증가
      2-2. 끝까지 찾지 못하면, 0 리턴
 */

function solution(begin, target, words) {
  const graph = makeGraph([begin, ...words]);
  let Q = [[begin, 0]];
  let visited = Array(words.length).fill(false);

  while (Q.length) {
    let [v, count] = Q.shift();
    if (v === target) return count;
    graph[v].forEach((node) => {
      if (!visited[node]) {
        visited[node] = true;
        Q.push([node, count + 1]);
      }
    });
  }
  return 0;
}

function makeGraph(words) {
  let graph = {};
  words.forEach((word) => {
    let nodes = [];
    words.forEach((str) => {
      let cnt = 0;
      for (let i = 0; i < str.length; i++) {
        if (word[i] !== str[i]) cnt++;
        if (cnt > 1) break;
      }
      if (cnt === 1) nodes.push(str);
    });
    graph[word] = nodes;
  });
  return graph;
}

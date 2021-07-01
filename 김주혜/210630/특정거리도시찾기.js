// 백준 - 18352 특정 거리의 도시 찾기 (DFS/BFS)

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [info, ...arr] = input.split("\n");
  let [N, M, K, X] = info.split(" ").map((el) => Number(el));
  arr = arr.map((el) => el.split(" ").map((el) => Number(el)));
  const graph = makeGraph(arr);

  let visited = Array(N + 1).fill(Infinity);
  visited[X] = 0;
  let Q = [X];
  while (Q.length) {
    if (visited.filter((el) => el !== Infinity).length === N) break;
    let v = Q.shift();
    Q.push(...filterNode(v));
  }

  visited.forEach((node, idx) => {
    if (node === K) console.log(idx);
  });
  if (visited.filter((el) => el === K).length === 0) console.log(-1);
  return;

  function filterNode(v) {
    let arr = [];
    graph[v].forEach((node) => {
      if (visited[node] > visited[v] + 1) {
        arr.push(node);
        visited[node] = visited[v] + 1;
      }
    });
    return arr;
  }

  function makeGraph(arr) {
    let graph = {};
    arr.forEach((node) => {
      let [from, to] = node;
      if (!graph[from]) graph[from] = [to];
      else graph[from].push(to);
    });
    return graph;
  }
}

let input = `4 4 2 1
1 2
1 3
2 3
2 4`;
console.log(solution(input)); // 4

input = `4 3 2 1
1 2
1 3
1 4`;
console.log(solution(input)); // -1

input = `4 4 1 1
1 2
1 3
2 3
2 4`;
console.log(solution(input)); // 2 3

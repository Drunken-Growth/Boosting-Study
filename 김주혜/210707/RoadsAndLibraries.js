/*  해커랭크 - Roads and Libraries (그래프) 
  1. 섬 개수 구하기
  2. 섬 개수 ~ n 까지 경우의 수 중 비용최소인것 리턴
*/

function roadsAndLibraries(n, c_lib, c_road, cities) {
  let graph = makeGraph();
  let visited = Array(n + 1).fill(false);
  let islands = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      let Q = [i];
      while (Q.length) {
        let v = Q.shift();
        if (graph[v]) {
          for (let i = 0; i < graph[v].length; i++) {
            if (!visited[graph[v][i]]) {
              visited[graph[v][i]] = true;
              Q.push(graph[v][i]);
            }
          }
        }
      }
      islands++;
    }
  }
  islands += visited.filter((el) => !el).length - 1;

  let minCost = Infinity;
  for (let i = islands; i <= n; i++) {
    minCost = Math.min(minCost, i * c_lib + (n - i) * c_road);
  }
  return minCost;

  function makeGraph() {
    let graph = {};
    cities.forEach((city) => {
      let [from, to] = city;
      graph[from] ? graph[from].push(to) : (graph[from] = [to]);
      graph[to] ? graph[to].push(from) : (graph[to] = [from]);
    });
    return graph;
  }
}

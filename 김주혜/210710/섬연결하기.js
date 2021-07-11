/* 프로그래머스 - 섬 연결하기 */

function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  let visited = Array(n).fill(false);
  let total = 0;
  let start = costs[0][0];
  for (let i = 0; i < costs.length; i++) {
    let [from, to, cost] = costs[i];
    if (visited[from] === false) visited[from] = from;
    if (visited[from] !== visited[to]) {
      if (visited[to] !== false) {
        let val = visited[to];
        for (let j = 0; j < visited.length; j++) {
          if (visited[j] === val) visited[j] = visited[from];
        }
      }
      visited[to] = visited[from];
      total += cost;
    }
    if (visited.filter((el) => el === start).length === n) break;
  }
  return total;
}

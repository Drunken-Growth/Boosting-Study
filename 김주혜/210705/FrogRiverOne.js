/* 코딜리티 L6 - FrogRiverOne 
  - A 순회하며, 방문한적 없는 경우에만 visited 배열에 시간정보저장
  => visited에 최소시간 저장 후, visited 중 최대시간 리턴
*/

function solution(X, A) {
  let visited = Array(X + 1).fill(false);
  for (let i = 0; i < A.length; i++) {
    if (!visited[A[i]]) visited[A[i]] = i;
  }
  if (visited.filter((el) => el !== false).length === X)
    return Math.max(...visited);
  return -1;
}

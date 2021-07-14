/* Codility - Tree Height */

function solution(T) {
  let max = 0;
  dfs(T, 0);
  return max;

  function dfs(obj, depth) {
    max = Math.max(max, depth);
    if (obj.l !== null) dfs(obj.l, depth + 1);
    if (obj.r !== null) dfs(obj.r, depth + 1);
  }
}

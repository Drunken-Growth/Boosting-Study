// Easy but Good Problem
// 문제이해
// 이진트리가 주어졌을 떄, 이진트리의 높이를 찾는 문제

// 재귀,DFS 방식으로 모든 노드를 완전탐색하고, 가장 긴 높이를 기록하여 리턴한다.

function solution(T) {
  let max = 0;
  check_height(T, 0);
  return max;

  function check_height(N, height) {
    if (N.r === null && N.l === null) {
      max = Math.max(max, height);
    }

    if (N.r !== null) {
      check_height(N.r, height + 1);
    }
    if (N.l !== null) {
      check_height(N.l, height + 1);
    }
  }
}

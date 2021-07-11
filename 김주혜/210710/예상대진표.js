/* 프로그래머스 - 예상 대진표 */

function solution(n, a, b) {
  let cnt = 0;
  while (a !== b) {
    [a, b] = [Math.ceil(a / 2), Math.ceil(b / 2)];
    cnt++;
  }
  return cnt;
}

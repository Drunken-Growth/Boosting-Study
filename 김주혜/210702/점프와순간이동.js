/* 프로그래머스 - 점프와 순간이동 
  n이 0이 될때까지
  => n이 홀수면 -> -1 점프
  => n이 짝수면 -> /2 순간이동
*/

function solution(n) {
  let cnt = 0;
  while (n > 0) {
    if (n % 2 !== 0) {
      n--;
      cnt++;
    } else n /= 2;
  }
  return cnt;
}

/* L10 - CountFactors*/

function solution(N) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      if (i * i === N) cnt++;
      else cnt += 2;
    }
  }
  return cnt;
}

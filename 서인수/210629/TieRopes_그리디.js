function solution(K, A) {
  // 풀이방법
  // 1) A배열 순회하며 누적합 구한다.
  // 2) 누적합이 K보다 커지면 1) cnt++ 2) 누적합초기화
  // 3) 순회종료 후 , 최종 cnt 빈환

  let cnt = 0;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum >= K) {
      cnt++;
      sum = 0;
    }
  }
  return cnt;
}

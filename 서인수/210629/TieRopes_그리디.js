function solution(K, A) {
  // 풀이방법
  // 앞의 로프부터 길이를 더해서 K 보다 커지면 cnt 올리고 초기화 시켜준다.

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

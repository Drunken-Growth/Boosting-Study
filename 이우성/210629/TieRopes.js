function solution(K, A) {
  let check = 0;
  let answer = 0;

  for (let i = 0; i < A.length; i++) {
    // 로프를 계속 더해준다.
    check += A[i];

    // 더해주다가 K보다 크거나 같으면 매듭짓고 초기화
    if (check >= K) {
      check = 0;
      answer += 1;
    }
  }

  return answer;
}

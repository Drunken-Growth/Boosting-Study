function solution(A) {
  let answer = 0;
  let P = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      P += 1;
    } else {
      answer += P * A[i];
    }
  }

  return answer > 1000000000 ? -1 : answer;
}

/**
 * 문제 파악
 * 1. 0또는 1을 담고 있는 배열이 있다. 각각 0은 동쪽(P), 1은 서쪽(Q)
 * 2. A = [0, 1, 0, 1, 1] return 5
 * 3. 지나가는 차를 카운트해라.
 * 4. 만약 10억을 초과하면 -1을 반환한다.
 */

function solution(A, B, K) {
  if (A === 0) {
    return parseInt(B / K) + 1;
  } else {
    return parseInt(B / K - parseInt((A - 1) / K));
  }
}

/**
 * 문제 파악
 * 0. 시간복잡도: O(n) 미만 => for loop X
 * 1. A, B, K 세 가지의 양수가 주어진다. [A ~ B] 범위 내부에 수를 리턴한다.
 * 2. A부터 K까지의 배열을 나눈다. 주어진 K의 간격 만큼
 * 3. A, B의 범위가 K 값보다 못 미치면 1을 반환
 * 4. A = 1, B = 1, K = 11 => return 0
 * 5. A = 0, B = 0, K = 11 => return 1
 * 6. A = 10, B = 10, K = 20 또는 K = 5 => return 0
 * 7. A = 10, B = 10, K = 7 => return 0
 * 8. 위 네 가지에서 규칙을 찾아야 함.
 * 9. A가 0일 때와 아닐때로 구분?
 * 10. A = 0, B = 13, K = 2 => return 7
 * 11. A = 10, B = 10, K 5 => return 1
 * 12. A, B 둘 다 10이면 5의 배수인 10이 있기 때문에 1을 반환?????
 */

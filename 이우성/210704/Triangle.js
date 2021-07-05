function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] < A[i - 1] + A[i - 2]) {
      return 1;
    }
  }

  return 0;
}

/**
 * 문제 파악
 * 1. A = [10, 2, 5, 1, 8, 20] => 0 ,2, 4가 삼각형을 이룬다. => return 1
 * 2. 만약 삼각형을 이룬다면 1을 반환하고, 그렇지 않으면 0을 반환
 *
 * 수도 코드
 * 1. 정렬하고 주어진 식대로 맞는지 확인
 */

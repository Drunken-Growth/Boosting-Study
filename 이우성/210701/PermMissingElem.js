function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (i !== A[i] - 1) {
      return i + 1;
    }
  }
  return A.length + 1;
}

/**
 * 문제: 1부터 N + 1까지의 배열중에 누락된 요소를 찾아라.
 *
 * 0. 길이가 2보다 작을 경우 길이에서 + 1을 해준다.
 * 1. 정렬을 한다 => 1,2,3,5
 * 2. 만약 인덱스랑 요소랑 다르면 그 인덱스를 반환한다.
 */

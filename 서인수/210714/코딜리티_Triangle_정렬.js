// very Easy -> 다시 안풀어도 됨
// 문제 이해
// A배열의 숫자들로 하나라도 삼각형을 만들 수 있다면 1, 아니라면 0리턴

// 문제접근
// 삼각형 되는지 여부는 가장작은변 2개 합 > 가장 긴 변 이면 가능이다.
// 오름차순 sort 한 후, 모든 경우 탐색

function solution(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length - 2; i++) {
    if (isTriangular(A[i], A[i + 1], A[i + 2])) {
      return 1;
    }
  }

  return 0;

  function isTriangular(a, b, c) {
    return a + b > c;
  }
}

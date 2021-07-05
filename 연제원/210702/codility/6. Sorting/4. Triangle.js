// An array A consisting of N integers is given.
// A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
// For example, consider array A such that:

//   A[0] = 10    A[1] = 2    A[2] = 5
//   A[3] = 1     A[4] = 8    A[5] = 20
// Triplet (0, 2, 4) is triangular.

// 문제
// 아님! => 위 조건을 만족하는 갯수 리턴
// 위 조건을 만족하면 1 리턴, 아니면 0 리턴

// 풀이
// 1. 길이순대로 정렬
// 2.  0 ≤ P < Q < R < N 이여야 한다!
// 3. A[P] + A[Q] > A[R] 하나만 만족해도 조건 만족 어차피 R이 제일 크기 때문에

// 진짜 문제좀 잘 읽자.. ㅠ 갯수 리턴하는 줄
// + 굳이 인덱스 고려할 필요가 없다. 어차피 P, Q, R 은 알아서 고려된다. 즉, 중복만 아니면 된다는 뜻 ㅠ

// 음수 고려하려했는데 안해도 통과해서 패스~!
function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    if (A[i + 2] < A[i] + A[i + 1]) {
      return 1;
    }
  }

  return 0;
}

console.log(solution([10, 2, 5, 1, 8, 20])); // 1
console.log(solution([10, 50, 5, 1])); // 0
console.log(solution([1, 1, 1, 1, 5, 5, 5])); // 1

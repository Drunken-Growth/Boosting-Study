// A non-empty array A consisting of N integers is given.
// The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

// For example, array A such that:
// A = [-3, 1, 2, -2, 5, 6]
// contains the following example triplets:

// (0, 1, 2), product is −3 * 1 * 2 = −6
// (1, 2, 4), product is 1 * 2 * 5 = 10
// (2, 4, 5), product is 2 * 5 * 6 = 60

// Your goal is to find the maximal product of any triplet.

// 문제
// N개의 정수로 이루어진 배열 A가 주어질 때, 3개 요소 뽑아서 최댓값을 구해라~!

// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−1,000..1,000].

// 풀이
// 정렬을 한다.
// 음수, 양수 분리
// 음수 2개 x 양수 1개 에서도 최댓값 나올 수 있고
// 그 외엔 양수만 고려
// 정렬로 인해 시간복잡도 O(N logN)
function solution(A) {
  A.sort((a, b) => a - b);

  let max;

  if (A[0] < 0 && A[1] < 0) {
    // 일단 앞 2개가 음수니깐 고려해줌
    let allYang = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
    let containTwoUm = A[0] * A[1] * A[A.length - 1];
    max = Math.max(allYang, containTwoUm);
  } else {
    // 그 외엔 고려 X
    max = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  }

  return max;
}

console.log(solution([-3, 1, 2, -2, 5, 6])); // 60
console.log(solution([10, 10, 10])); // 1000

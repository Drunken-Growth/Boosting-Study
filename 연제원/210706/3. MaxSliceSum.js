// Find a maximum sum of a compact subsequence of array elements.

// A non-empty array A consisting of N integers is given.
// A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A.
// The sum of a slice (P, Q) is the total of A[P] + A[P+1] + ... + A[Q].

// 배열 A가 주어진다.
// 0 ≤ P ≤ Q < N인 P, Q를 통해 A[P] + A[P+1] + ... + A[Q]를 구했을 때, 최댓값을 구해라.

// N is an integer within the range [1..1,000,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000];
// the result will be an integer within the range [−2,147,483,648..2,147,483,647].

// 풀이
// 찐 카데인 알고리즘!!

function solution(A) {
  let answer = A[0];
  let local_max = A[0];

  for (let i = 1; i < A.length; i++) {
    local_max = Math.max(A[i], local_max + A[i]);
    // console.log(local_max, i);
    if (local_max > answer) {
      answer = local_max;
    }
  }
  return answer;
}

console.log(solution([3, 2, -6, 4, 0])); // 5

// A non-empty array A consisting of N integers is given.
// A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A
// (notice that the slice contains at least two elements).
// The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice.
// To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

// 문제
// 정수들로 구성된 배열 A가 주어진다.
// 이때, (P, Q)가 주어지는 데, (0 ≤ P < Q < N) 얘네로 A를 자른다. (적어도 2 요소가있음)
// P~Q까지 합을 길이로 나눠 평균을 구한다.
// 목표는 평균이 최소인 부분의 시작점을 구해라?!

// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−10,000..10,000].

// 풀이
// 접근을 어떻게 할까.. -> 일단 전부 계산
// 시간 초과! => O(N^3)
function solutionFail(A) {
  let avg = Number.MAX_SAFE_INTEGER;
  let start = 0;

  for (let P = 0; P < A.length - 1; P++) {
    for (let Q = P + 1; Q < A.length; Q++) {
      const val =
        A.slice(P, Q + 1).reduce((acc, cur) => acc + cur) / (Q - P + 1);
      if (val < avg) {
        avg = val;
        start = P;
      }
    }
  }

  return start;
}

// 시작하는 값보다 다음 값이 큰 값일 때 무조건 평균은 커진다.
// 2개인 경우와 3개인 경우만 구하면 된다! (1보다 크므로)
// a <= b <= c <= d 일 경우
// (a+b)/2 <= (a+b+c+d)/4 <= (c+d)/2 가 성립됨
// => 어차피 4개 이상부터는 2개 2개 ...로 나누어 지는데 이 2개가 최솟값이 되기 때문에! (or 2개 3개...)
// [1,2,1,4] 인 경우
// (1+2+1)/3 < (1+2)/2 <= ... 이런경우도 있어서 2~3개 짜리만 고려!

function solution(A) {
  let minAvg = (A[0] + A[1]) / 2;
  let start = 0;

  for (let i = 2; i < A.length; i++) {
    let avg = (A[i - 2] + A[i - 1] + A[i]) / 3;
    if (minAvg > avg) {
      minAvg = avg;
      start = i - 2;
    }

    avg = (A[i - 1] + A[i]) / 2;
    if (minAvg > avg) {
      minAvg = avg;
      start = i - 1;
    }
  }

  return start;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8])); // 1

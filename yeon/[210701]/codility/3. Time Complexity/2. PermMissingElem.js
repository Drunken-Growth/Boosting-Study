// An array A consisting of N different integers is given.
// The array contains integers in the range [1..(N + 1)],
// which means that exactly one element is missing.

// Your goal is to find that missing element.

// 문제
// N개의 정수가 담긴 배열이 1 ~ N+1 로 주어진다.
// 이때 1 ~ N+1 가운데 없는 정수 1개를 찾아라!

function solution(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i <= A.length; i++) {
    if (A[i] !== i + 1) return i + 1;
  }
}

console.log(solution([2, 3, 1, 5])); // 4

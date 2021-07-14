// Easy But 아이디어 떠올리는 문제, 여유있으면 풀어봐도 좋음.
// 문제이해
// 배열에 유일하게 존재하는 가장 빠른idx의 값을 찾아 리턴하는 문제

// 문제 풀이
// 1. 일단 A를 순회하며 cnt를센다.
// 2. cnt배열을 순회하며 1일 때 리턴한다.

function solution(A) {
  let cntObj = {};
  for (let i = 0; i < A.length; i++) {
    cntObj[A[i]] = (cntObj[A[i]] || 0) + 1;
  }
  for (let i = 0; i < A.length; i++) {
    if (cntObj[A[i]] === 1) return A[i];
  }

  return -1;
}

console.log(solution([4, 10, 5, 4, 2, 10])); // 5
console.log(solution([6, 4, 4, 6])); // -1

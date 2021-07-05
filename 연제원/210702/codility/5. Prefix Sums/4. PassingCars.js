// A non-empty array A consisting of N integers is given.
// The consecutive elements of array A represent consecutive cars on a road.

// Array A contains only 0s and/or 1s:

// 0 represents a car traveling east,
// 1 represents a car traveling west.
// The goal is to count passing cars. We say that a pair of cars (P, Q),
// where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

// 문제
// N개의 연속된 요소로(0 or 1) 구성된 A 배열이 주어진다.
// 0 : 차가 동쪽으로 움직임, 1 : 서쪽으로 움직임
// P는 0(동쪽으로 움직이는 차), Q는 1(서쪽으로 움직이는 차)라고 할때 서로 마주치는 경우의 수를 구해라!
// A = [0(0), 1(1), 2(0), 3(1), 4(1)]
// => (0, 1), (0, 3), (0, 4), (2, 3), (2, 4)

// 풀이
// 배열 A를 순회하면서 요소가 0일때만, 그 뒤에 1의 수를 세어주면 될 듯?
// 역시나 시간초과..!
function solutionFail(A) {
  let answer = 0;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === 0) {
      for (let j = i + 1; j < A.length; j++) {
        if (A[j] === 1) {
          answer++;
        }
      }
    }
  }
  return answer;
}

// 반대로 역으로 시작해서
// 1을 계속 세다가(count++) 0을 만나면 count를 answer에 추가
// 추가. 1,000,000,000넘으면 -1 리턴
// => O(N) !
function solution(A) {
  let answer = 0;
  let count = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 1) {
      count++;
    } else {
      // A[i] === 0
      answer += count;
    }
    // console.log("answer", answer, "count", count);
    if (answer > 1000000000) {
      return -1;
    }
  }

  return answer;
}

console.log(solution([0, 1, 0, 1, 1])); // 5

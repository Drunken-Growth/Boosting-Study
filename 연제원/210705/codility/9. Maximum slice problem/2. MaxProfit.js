// An array A consisting of N integers is given.
// It contains daily prices of a stock share for a period of N consecutive days.
// If a single share was bought on day P and sold on day Q,
// where 0 ≤ P ≤ Q < N, then the profit of such transaction is equal to A[Q] − A[P], provided that A[Q] ≥ A[P].
// Otherwise, the transaction brings loss of A[P] − A[Q].

// A = [23171, 21011, 21123, 21366, 21013, 21367] 이 있다.
// 0일때 사고 2일때 팔면 손실이 2048난다.
// 4일때 사고 5일때 팔면 이득이 354난다.
// 최대 이익은 356
// 1일때 사고 5일때 팔면 이득이 356난다.

// 최대 수익을 리턴해라~!
// 수익이 없으면 0 리턴해라~!

// 풀이
// 단순히 for문 돌면 O(N^2)이겠지만 N이 400,000이므로 불가
// O(N logN) = 400,000 x 632.~ = 2억 6천만 => X
// 이것도 O(N)으로..

// for문 1번으로 끝낸다..!

// 1. 최대 수익을 저장하는 변수 생성 = profit
// 2. 최솟값의 인덱스를 저장하는 변수 생성
// 3. A[i] - A[최솟값 인덱스]와 profit을 비교해서 대입
//   3-1. A[i] - A[최솟값 인덱스]가 큰 경우 이때 i를 최댓값 위치 저장

// 카데인 알고리즘 이용한다..?

function kadanesAlgorithm(A) {
  let localMax = A[0];
  let globalMax = A[0];

  for (let i = 1; i < A.length; i++) {
    localMax = Math.max(A[i], localMax + A[i]);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }

  return globalMax;
}

// 카데인 알고리즘은 전에 있는 계산들을 생략할 수 있다.
// 예시
// [23171, 21011, 21123, 21366, 21013, 21367]

// max_profit : i일 때 최대 수익
// answer : 전체 최대 수익
// min_share : 최솟값을 가진 주식

// i = 0일 때
// 수익 = 0
// answer = 0
// max_profit = 0
// min_share = A[0]

// 계산 순서
// 1. for문으로 i = 1부터 순환한다.
// 2. i일때 최대 수익 = max_profit = A[i] - min_share
// 3. 기존의 전체 최대 수익과 i일때 최대 수익을 비교한다. => Math.max(answer, max_profit)
//   3-1. i일때 최대 수익이 더 크면 전체 최대 수익에 할당 => answer = max_profit
// 4. 근데 만약 A[i]가 기존의 최솟값 주식보다 작으면 A[i]를 할당해준다. => min_share = A[i]

// i = 1일 때
// max_profit = A[1] - min_share = 21011 - 23171 = -2160
// answer = 0 (0 > -2160)
// min_share = 21011 (A[i] = 21011 < min_share = 23171)

// i = 2일 때
// max_profit = A[2] - min_share = 21123 - 21011 = 112
// answer = 112 (answer = Math.max(answer, max_profit) = Math.max(0, 112))
// min_share = 21011 (A[i] = 21123 > min_share = 21011)

// i = 3일 때
// max_profit = A[3] - min_share = 21366 - 21011 = 355
// answer = 355 (answer = Math.max(answer, max_profit) = Math.max(112, 355))
// min_share = 21011 (A[i] = 21366 > min_share = 21011)

// ...

function solution(A) {
  let answer = 0;
  let max_profit = 0;
  let min_share = A[0];

  for (let i = 1; i < A.length; i++) {
    max_profit = A[i] - min_share;
    if (A[i] < min_share) {
      min_share = A[i];
    }

    answer = Math.max(answer, max_profit);
  }

  if (answer < 0) {
    answer = 0;
  }
  return answer;
}

console.log(solution([23171, 21011, 21123, 21366, 21013, 21367])); // 356 (1, 5)
console.log(solution([4, 3, 2, 1, 2, 3, 4])); // 3 (3, 6)
console.log(solution([4, 3])); // 0

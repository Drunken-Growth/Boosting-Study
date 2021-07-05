// N < 100,000 이므로
// O(N^2)으로는 완전탐색 불가

// 문제포인트
// 최소의 구간합 평균이 나오도록 선택할 수 있는 최대의 원소개수는 3개이다.
// 3개 선택은 가능 //  1, 2, 1
// 4개선택시 작은 값 2개 선택하는 것과 평균이 같다. 1221 => 12   1234 => 12  2, 98, 99 ,2 => 2,98

// 3차풀이 => 통과
// 2차 코드에서 시작인덱스의 최대값은 A.length -1 까지 포함해야함
// [1,99,2,1] A.length =4    idx기준으로 (2,3) 까지 확인해야함  idx <= A.length -2
// 요것만 바꿔주니 통과.

function solution(A) {
  // 1.해당 idx까지의 합을 구하는 함수
  let memo = [];
  function accSum(idx) {
    if (idx === 0) return A[0];
    if (memo[idx]) return memo[idx];
    memo[idx] = A[idx] + accSum(idx - 1);
    return A[idx] + accSum(idx - 1);
  }

  // 2. 시작idx기점으로 2개일 때, 3개일 때의 평균을 구해서 현재 최소 평균과 비교한다.
  //   최소일 경우ㅡ 최소값바꾸고 시작인덱스를 기록한다.
  let min = 987654321;
  let s = 0;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j <= i + 2; j++) {
      let mean;
      if (i === 0) {
        mean = accSum(j) / (j + 1);
      } else {
        mean = (accSum(j) - accSum(i - 1)) / (j - i + 1);
      }
      // console.log([i,j,mean])
      if (mean < min) {
        s = i;
        min = mean;
      }
    }
  }

  return s;
}

// 2차 => 테케 1개만 불통
// medium_range
// increasing, decreasing (legth = ~100) and small functional✘
// WRONG ANSWER got 99 expected 100)
// O(N + M) (M은 최대 원소개수가 3개이므로 2번만 계산하면 되는 것을 의미)
// O(N+2)

// 연속한 최소가 나오도록 선택할 수 있는 최대의 원소개수는 3개이다.
// 3개 선택은 가능 //  1, 2, 1
// 4개선택시 작은 값 2개 선택하는 것과 평균이 같다. 1221 => 12   1234 => 12  2, 98, 99 ,2 => 2,98

// 1번째 for문 -> 시작idx 설정하기
// A를 0번째 idx 부터 끝에서 2번째 값까지 순회한다. (최대 3개 이므로)

// 2번째 for문 -> 2번만 실행됨 (시작idx로부터 2개의 평균, 3개의 평균구하기)
// 2.1 i === 0일때는 예외로 따로 값을 구해줌 (accSUm(i-1) 불가해서)
// 2.2  평균값을 구하고, 현재 최소값보다 작은 경우, 시작idx(s)를 기록하고, min값을 변경한다.

function solution(A) {
  // 해당 idx까지의 합을 구하는 함수
  let memo = [];
  function accSum(idx) {
    if (idx === 0) return A[0];
    if (memo[idx]) return memo[idx];

    memo[idx] = A[idx] + accSum(idx - 1);
    return A[idx] + accSum(idx - 1);
  }

  let min = 987654321;
  let s = 0;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j <= i + 2; j++) {
      let mean;
      if (i === 0) {
        mean = accSum(j) / (j + 1);
      } else {
        mean = (accSum(j) - accSum(i - 1)) / (j - i + 1);
      }
      // console.log([i,j,mean])
      if (mean < min) {
        s = i;
        min = mean;
      }
    }
  }

  return s;
}

// 1차
// memoization (O(N^2실패))
// 1. i번째 idx 까지의 합을 모두 구한다.
function solution(A) {
  let result = [];

  let memo = [];
  function accSum(idx) {
    if (idx === 0) return A[0];
    if (memo[idx]) return memo[idx];

    memo[idx] = A[idx] + accSum(idx - 1);
    return A[idx] + accSum(idx - 1);
  }

  let min = 999999;
  let s = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      let value;
      if (i === j) continue;
      if (i === 0) {
        value = accSum(j) / (j + 1);
      } else {
        value = (accSum(j) - accSum(i - 1)) / (j - i + 1);
      }
      // console.log([i,j,value])
      if (value < min) {
        s = i;
        min = value;
      }
    }
  }

  return s;
}

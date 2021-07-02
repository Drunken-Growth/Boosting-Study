// You are given N counters, initially set to 0, and you have two possible operations on them:

// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:

// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.

// N개의 카운터가 0으로 초기화된 상태로 주어진다. 2가지 작업이 가능한데,
// increase일 때 1 추가
// A[N] = N + 1일 때 모든 카운터가 최댓값으로 변한다!

// 카운터가 가질수 있는 최댓값은 N + 1?

// 예로, N=5, A=[3,4,4,6,1,4,4] 가 주어질 때 => [3, 2, 2, 4, 2]

// 풀이
// 1. 정답 배열을 만듦
// 2. 해당하는 카운터를 하나씩 증가
//   2-1. 이때 어떤 값이 N+1 이라면 정답 배열의 모든 값에 최댓값을 할당

// 또또 시간초과 후.
function solutionFail(N, A) {
  let answer = Array(N + 1).fill(0);
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    const pick = A[i];

    if (pick === N + 1) {
      // 1. for of로 값이 안바뀐다..?!
      // for (let x of answer) {
      //   x = max;
      // }

      // 2. 고쳤는데 시간초과 뜸
      // for (let j = 0; j < answer.length; j++) {
      //   answer[j] = max;
      // }

      // 3. 일일히 하지말고 새로 할당!
      // 해도 시간초과 ㅠ

      // => O(N^2)라서 그런듯!
      answer = Array(N + 1).fill(max);
    } else {
      answer[pick]++;
      if (answer[pick] > max) {
        max = answer[pick];
      }
    }
  }
  answer.shift();
  return answer;
}

// 다른 방법을 찾자..
// N + 1일 때 일일이 다시 배열을 구하지말고 따로 저장해서 마지막에 한번에 더해주기?
function solution(N, A) {
  let answer = Array(N).fill(0);
  let max = 0;
  let lastMax = 0;

  for (let i = 0; i < A.length; i++) {
    let counter = A[i];
    if (counter <= N) {
      if (answer[counter - 1] < lastMax) {
        answer[counter - 1] = lastMax;
      }

      answer[counter - 1]++;

      if (max < answer[counter - 1]) {
        max = answer[counter - 1];
      }
    } else {
      // counter === N + 1
      lastMax = max;
    }
    console.log(answer);
  }

  for (let i = 0; i < N; i++) {
    if (answer[i] < lastMax) {
      answer[i] = lastMax;
    }
  }

  return answer;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4])); // [3,2,2,4,2]

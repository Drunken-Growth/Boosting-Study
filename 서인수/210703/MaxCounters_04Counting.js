// 3차풀이
// else 부분에 result.fill(max) 부분이 O(N^2)을 만들었기 때문에,
// 이 부분을 lastmax를 관리하고, A[i] <= N 때 lastMax값을 갖도록하고, 최종적으로 lastMax보다 작은 값은 lastMax값으로 대체한다.
function solution(N, A) {
  let result = Array(N + 1).fill(0);
  let max = 0;
  let lastMax = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      if (result[A[i]] < lastMax) {
        result[A[i]] = lastMax;
      }
      result[A[i]] += 1;
      if (result[A[i]] > max) {
        max = result[A[i]];
      }
    } else {
      lastMax = max;
    }
  }

  result = result.map((el) => {
    if (el < lastMax) return lastMax;
    else return el;
  });
  return result.slice(1);
}

// 1. N의 크기를 가지고 초기값은 모두 0인 result 생성
// 2. A 명령어 집합을 순회하며,
// 2.1 A[i] <= N 이면, A[i] 에 해당하는 요소의 크기를 1증가
// 2.2 A[i] > N 이면, 모든 요소를 max 값으로 변경

// 1차 풀이
// 시간복잡도 O(N+M) 으로 마지막 테케 통과안됨
// Math.max가 O(N)이어서 그런듯하다.
function solution(N, A) {
  let result = Array(N + 1).fill(0);
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      result[A[i]] += 1;
      max = Math.max(max, result[A[i]]);
    } else {
      result.fill(max);
    }
  }

  return result.slice(1);
}

//2차 풀이
// Mate.max가 아니라 result.fill(max)로 매번 채워주는 곳에서 연산이 많은 듯 하다.
function solution(N, A) {
  let result = Array(N + 1).fill(0);
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      result[A[i]] += 1;
      if (result[A[i]] > max) {
        max = result[A[i]];
      }
    } else {
      result.fill(max);
    }
  }

  return result.slice(1);
}

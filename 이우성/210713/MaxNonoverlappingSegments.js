// 1. 시간 복잡도: O(N), 효율: 100%

function solution(A, B) {
  const len = A.length;
  if (len < 1) return 0;

  let answer = 1;
  let last_end = B[0];
  let segment_start = false;

  for (let i = 0; i < len; i++) {
    if (last_end < A[i]) {
      segment_start = true;
    }

    if (segment_start && last_end < B[i]) {
      answer += 1;
      last_end = B[i];
      segment_start = false;
    }
  }

  return answer;
}

/**
 * 몇 개의 세그먼트를 이었을 때 가장 많은 non 오버래핑이 나오는지 찾는다.
 * 시간 복잡도: O(N^2)일 경우 => 3,000,000,000 (30억)
 * 예외 케이스:
 * ([1], [2]) , ([1, 3], [5, 6]), ([0], [0])
 */

// 2. 시간 복잡도: O(N), 효율: 100%, 리팩토링

function solution(A, B) {
  const len = A.length;
  if (len < 1) return 0;

  let answer = 1;
  let last_end = B[0];

  for (let i = 0; i < len; i++) {
    if (last_end < A[i]) {
      answer += 1;
      last_end = B[i];
    }
  }

  return answer;
}

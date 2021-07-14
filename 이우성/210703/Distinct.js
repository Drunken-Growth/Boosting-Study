Distinct;

// 첫번째로 풀었던 방식: 정답률 100%
function solution(A) {
  let answer = new Set();

  for (let i = 0; i < A.length; i++) {
    answer.add(A[i]);
  }

  return answer.size;
}

// 두번째로 풀었던 방식: 정답률 100%

function solution(A) {
  A = A.sort((a, b) => a - b);

  let count = 0;
  let len = A.length;

  if (len < 2) return len;

  for (let i = 0; i < len; i++) {
    if (A[i] !== A[i - 1]) {
      count += 1;
    }
  }

  return count;
}

/**
 * 문제 파악
 * 1. 배열을 순회하다가 순서가 맞으면 그 순서의 마지막 숫자를 반환한다.
 * 2. 숫자가 순서대로 이어지면 카운트를 세다가 연속된 숫자가 끊키면 그 때, 연속된 숫자의 마지막을 반환
 * 3. Set 함수를 이용해서 중복처리를 한다.
 * 4. 결국에는 이어지는 요소들만 남기 때문에 Set의 길이를 반환하면 된다.
 */

// VeryEasy => 다시 안풀어도 됨

// 문제이해
// A는 (1~N+1)의 숫자 중 하나를 제외한 값으로 구성되어있다.
// 빠져있는 이 값을 찾는문제

// 문제접근
// A를 sort 한다면 A의 값은 자신의 idx+1 이 될 것이다.
// 이 때 자신의 값이 idx+1 이 아니라면, 해당 값은 빠져버린 값이다.

//문제 풀이
// 1. A를 오름차순 sort
// 2. idx+1 과 A[idx] 를 비교하여 다를 때 해당 값 리턴
// 3. for문 돌아도 발견하지 못했다면 A가 이미 정렬되어있는 것이므로 N+1값이 정답이다.
function solution(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) {
      return i + 1;
    }
  }
  return A.length + 1;
}

// 1차 풀이 조금 다르게 풀었다.
// 문제풀이
// N+1 까지의 합을 구한 후 A의 모든 요소의 합을 빼면 빠진 값이 나온다.

function solution(A) {
  if (A.length === 0) return 1;
  let nums = [];
  for (let i = 1; i <= A.length + 1; i++) {
    nums.push(i);
  }

  return (
    nums.reduce((acc, cur) => acc + cur) - A.reduce((acc, cur) => acc + cur)
  );
}

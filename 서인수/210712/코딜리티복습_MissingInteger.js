// Easy : set객체를 활용한다면 쉽게 풀어볼 수 있는 문제.

// 문제이해
// A가 포함하고 있지 않은 가장 작은 양의 정수를 리턴하는 문제

// 문제 접근
// A를 순회하며, 양의 정수만 을 담는다.

// set size가 0이라면 1리턴

// set객체 순회하며 idx+1을 set가 포함하지 않고 있을 때, 해당값리턴
function solution(A) {
  let set = new Set();

  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) set.add(A[i]);
  }

  for (let i = 1; i <= set.size; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  if (set.size === 0) return 1;
  return set.size + 1;
}

// non-empty array A consisting of N integers is given.

// A permutation is a sequence containing each element from 1 to N once, and only once.

// 배열 A가 permutation이면 1, 아니면 0 리턴
// permutation의 조건은 1~N까지 모두 한번씩만 있어야 한다.

// 1 <= N <= 100,000
// 1 <= A.length <= 1,000,000,000

// sort 쓰면 시간 초과뜰 줄 알았는데 통과..!
function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) return 0;
  }
  return 1;
}

console.log(solution([4, 1, 3, 2]));
console.log(solution([4, 1, 3]));

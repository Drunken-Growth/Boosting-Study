// given an array A consisting of N integers, returns the number of distinct values in array A.

// 문제
// N개의 정수로 이루어진 A배열이 주어질때, 모든 값의 수를 반환 => 중복 세지말란 뜻

// 예)
// A = [2, 1, 1, 2, 3, 1] => 3리턴

// 풀이
// 1. 단순 sort => 최소 O(NlogN)
// 2. set 이용? => O(N)

// 1번 방법
// 일단 통과!
// 퍼포먼스 테스트 마지막 => 0,120, 0.224, 0.216초
function solution1(A) {
  A.sort((a, b) => a - b);

  let count = 0;
  let prev;
  for (let i = 0; i < A.length; i++) {
    if (prev !== A[i]) {
      count++;
      prev = A[i];
    }
  }

  return count;
}

// 2번 방법
// 1번보다 좀 더 빠르다! => 0.092, 0.136, 0.132초
function solution(A) {
  let set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
  }

  return set.size;
}

console.log(solution([2, 1, 1, 2, 3, 1])); // 3

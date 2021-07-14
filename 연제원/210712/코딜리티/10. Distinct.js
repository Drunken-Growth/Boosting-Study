// 새로 풀이
function solution(A) {
  const set = new Set();

  for (let x of A) {
    if (!set.has(x)) {
      set.add(x);
    }
  }

  return set.size;
}

// 기존 풀이
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

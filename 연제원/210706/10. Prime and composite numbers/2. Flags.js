// Find the maximum number of flags that can be set on mountain peaks
// 꼭대기에 꽂힌 깃발들을 찾아라.

// A non-empty array A consisting of N integers is given.

// A peak is an array element which is larger than its neighbours.
// More precisely, it is an index P such that 0 < P < N − 1 and A[P − 1] < A[P] > A[P + 1].

// A = [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2] 일 때, 1, 3, 5, 10에서 꼭대기가 있다.

// 깃발은 오직 꼭대기에만 설치할 수 있다.
// K개의 깃발들이 있을때, 두 깃발 사이의 거리는 K보다 길거나 같아야 한다.

// 깃발이 2개 주어질 때, 두 깃발 사이의 거리는 무조건 2보다 크거나 같아야하므로
// index (P, Q) = (1, 3), (1, 5), (1, 10), (3, 5), (3, 10), (5, 10) => 둘 곳이 많으므로 일단 가능
// 깃발이 3개 주어질 때,
// index = (1, 5, 10) 가능
// 깃발이 4개 주어질 때,
// index = (1, 5, 10) 한개 꽂을 곳이 없으므로 안됨
// 정답은 3!

// 1. 꼭대기를 찾자 0 < P < N-1 => 양끝은 제외해도 가능!
// 2. 깃발을 꽂을 수 있는지 확인하는 함수 생성

function solution(A) {
  let peeks = [];

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peeks.push(i);
    }
  }

  let flag_count = 0;

  while (true) {
    flag_count++;
    if (!isPossible(peeks, flag_count)) {
      flag_count--;
      break;
    }
  }

  return flag_count;
}

function isPossible(arr, flag_length) {
  if (flag_length > arr.length) return false;

  if (flag_length === 1 || (flag_length === 1 && arr.length === 1)) return true;

  let count = 1;
  let prev_flag = 0;
  for (let next_flag = 1; next_flag < arr.length; next_flag++) {
    if (count === flag_length) return true;

    if (arr[next_flag] - arr[prev_flag] >= flag_length) {
      count++;
      prev_flag = next_flag;
    }
  }

  return count < flag_length ? false : true;
}

console.log(solution([5])); // 0
console.log(solution([1, 3, 2])); // 1
console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])); // 3
console.log(solution([0, 0, 0, 0, 0, 1, 0, 1, 0, 1])); // 2

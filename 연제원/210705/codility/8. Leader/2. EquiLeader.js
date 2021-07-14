// Find the index S such that the leaders of the sequences
// A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.

// A non-empty array A consisting of N integers is given.
// The leader of this array is the value that occurs in more than half of the elements of A.
// An equi leader is an index S such that 0 ≤ S < N − 1 and
// two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

// N개(0 < N)의 정수로 이루어진 배열이 주어진다.
// 이 배열의 리더는 A의 요소의 반보다 많이 나오는(중복된) 값을 가진다.
// equi리더는 S의 index인데,
//  0 ≤ S < N − 1 이고, A[0], A[1], ..., A[S], A[S + 1], A[S + 2], ..., A[N − 1]는 같은 값의 리더를 가진다.

// 예로 A = [4,3,4,4,4,2] 일때, 두 equi리더를 찾을 수 있다.
// 1. idx = 0
// => [4], [3,4,4,2] 로 나누면 둘 다 리더 4를 가짐
// 2. idx = 2
// => [4,3,4], [4,4,2] 로 나누면 둘 다 리더 4를 가짐

// 따라서 2 리턴

// N is an integer within the range [1..100,000];

// 풀이
// 전 문제랑 좀 섞어서 효율적으로..?
// N이 100000이니깐 최대 O(N logN)안으로..!

// 1. 배열을 분리하는 것
// 2. 그 배열에서 리더를 찾는 것

// 중요!
// 전 문제처럼 굳이 함수를 만들어서 filter 할 필요없이
// 그냥 left 리더, 카운트를 구하면 된다!

function solution(A) {
  let answer = 0;
  let left_length = 0;
  let left_hash = {};
  let left_leader = 0;
  let left_leader_count = 0;
  let right_length = A.length;
  let right_hash = {};

  for (let i = 0; i < A.length; i++) {
    if (right_hash[A[i]]) {
      right_hash[A[i]]++;
    } else {
      right_hash[A[i]] = 1;
    }
  }

  for (let i = 0; i < A.length; i++) {
    const el = A[i];

    right_length--;
    left_length++;

    if (right_hash[el] === 1) {
      delete right_hash[el];
    } else {
      right_hash[el]--;
    }

    if (left_hash[el]) {
      left_hash[el]++;
    } else {
      left_hash[el] = 1;
    }

    if (left_hash[el] > left_leader_count) {
      left_leader = A[i];
      left_leader_count = left_hash[el];
    }

    if (
      right_hash[left_leader] > right_length / 2 &&
      left_hash[left_leader] > left_length / 2
    ) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([4, 3, 4, 4, 4, 2]));

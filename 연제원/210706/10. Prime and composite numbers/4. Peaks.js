// Divide an array into the maximum number of same-sized blocks,
// each of which should contain an index P such that A[P - 1] < A[P] > A[P + 1].

// 정수로 이루어진 배열 A가 주어질 때
// peak는 주위(양 옆)보다 가장 큰 요소를 뜻한다.
//  0 < P < N − 1,  A[P − 1] < A[P] and A[P] > A[P + 1]. 조건을 만족한다.

// A = [1,2,3,4,3,4,1,2,3,4,6,2] 일때
// 가능한 peak는 index = 3, 5, 10 일때이다. => (4, 4, 6)

// 근데 같은 수의 배열들로 나누고 싶다.

// A[0], A[1], ..., A[K − 1],
// A[K], A[K + 1], ..., A[2K − 1],
// ...
// A[N − K], A[N − K + 1], ..., A[N − 1].

// 이 배열은 각각 peak를 가져야 한다.
// A를 3등분 하면 (1,2,3,4), (3,4,1,2), (3,4,6,2) 가 되는데
// 각각 peak를 가진다
// 근데 4등분하면 안됨
// 따라서 정답 : 3

// 1. A의 길이가 2 이하라면 무조건 0 리턴
// 2. peak를 구한다. => peaks 배열
// 3. peak의 총 갯수가 나눌 수 있는 최댓값이므로 거꾸로 for문을 돌린다.
//    peaks.length에서 1씩 줄여가면서 기존 배열 A의 길이의 약수일 때 나눌 수 있는지 확인한다.
//   3-1. peak의 갯수가 무조건 0개면 0, 1개면 1개를 리턴한다.
//   3-2. peak의 갯수가 2이상일 경우(N >= 2) N -> N-1 -> N-2 -> N-3 ... -> 2 -> 1 까지해서 i가 1에 도달하면 1을 리턴한다.
//   3-3. peak의 갯수를 하나씩 줄여가면서 배열 A의 약수일때 확인

function solution(A) {
  const N = A.length;
  if (N <= 2) return 0;

  let peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  if (peaks.length === 0) return 0;

  for (let i = peaks.length; i >= 1; i--) {
    if (i === 1) return 1;

    if (N % i === 0) {
      const K = N / i;
      let idx = 0;
      for (let i = 0; i < peaks.length; i++) {
        const peak_position = peaks[i];
        const start = K * idx;
        const end = K * (idx + 1) - 1;
        if (peak_position >= start && peak_position <= end) {
          idx++;
        }
      }
      if (idx === i) return i;
    }
  }
}

// 풀이
// 1. 우선 peak를 찾는다.
//   => 최대 가능한 등분 = peak의 갯수
// 2. 등분을 시작한다.
// 3. 조건을 확인한다.
//   => 길이가 12라면 1, 2, 3, 4, 6, 12가 가능
//   => 근데 peak가 3, 5, 10이다?
//   => 3등분을 한다고 K = 12 / 3 = 4 하면
//   => A[0] ~ A[K-1], A[K] ~ A[2K-1], A[2K] ~ A[2K-1] 로 나누어 지는데
//   => A[0] ~ A[3], A[4] ~ A[7], A[8] ~ A[11]
//   => peaks가 [3, 5, 6]이다.
//   => 0 <= peak <= K-1, K <= peak <= 2K-1, 2K <= peak <= 3K-1 ... 만족하는지 확인!

// 일단 시간복잡도는 O(NlogN)을 노리자!
// 원인을 모르겠으니깐 일단 다시풀기
function solutionFail(A) {
  // 1. peak들을 구한다.
  const peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  // 2. 나눌 수 있는 등분을 구한다.
  //   => 최대 peaks.length 까지만 나눌 수 있음
  let possible_divide = [];
  for (let i = peaks.length; i >= 1; i--) {
    if (A.length % i === 0) {
      possible_divide.push(i);
    }
  }

  console.log("배열 길이", A.length);
  console.log("가능한 꼭대기", peaks);
  console.log("나눌 수 있는 수", possible_divide);

  // 3. 돌면서 나눌 수 있으면 바로 끝!
  let max = 0;
  for (let i = 0; i < possible_divide.length; i++) {
    const want_divide = possible_divide[i];
    if (!isPossible(want_divide, peaks, A)) {
      return max;
    } else {
      max = want_divide;
    }
  }
  return max;
}

// 인자로 조각 낼 수, 존재하는 peaks, 기존 배열을 받는다.
//
function isPossible(piece, peaks, arr) {
  const length = arr.length / piece;

  const divide_pos = [];
  for (let i = length; i <= arr.length; i += length) {
    divide_pos.push(i - 1);
  }

  let start = 0;
  while (peaks.length > 0) {
    const peak = peaks.shift();
    if (divide_pos[0] >= peak && peak >= start) {
      start = divide_pos.shift() + 1;
    }
  }

  if (divide_pos.length === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isPossible(4, [3, 5, 10], [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
console.log(solution([1, 3, 2, 1])); // 1
// console.log(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])); // 3
// console.log(solution([5])); // 0
// console.log(solution([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 5, 4, 6, 1])); // 3

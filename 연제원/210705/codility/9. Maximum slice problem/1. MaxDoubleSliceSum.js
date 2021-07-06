// Find the maximal sum of any double slice.

// A non-empty array A consisting of N integers is given.
// A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called a double slice.
// The sum of double slice (X, Y, Z) is the total of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1].

// A = [3, 2, 6, -1, 4, 5, -1, 2]
// double slice (0, 3, 6), sum is 2 + 6 + 4 + 5 = 17,
// double slice (0, 3, 7), sum is 2 + 6 + 4 + 5 − 1 = 16,
// double slice (3, 4, 5), sum is 0.

// The goal is to find the maximal sum of any double slice.
// Write a function:
// function solution(A);
// that, given a non-empty array A consisting of N integers, returns the maximal sum of any double slice.

// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−10,000..10,000].

// X, Y, Z를 기준으로 기존 배열을 잘라서 최대합을 구해라~!

// 풀이
// 포함되는 부분 =>  (X + 1) ~ (Z - 1) => 여기서 Y 하나 더 빠지려면 일단 최소
// Z >= X + 3 이어야 한다.
// => A.length <= 3 이면 걍 리턴 0

// O(N^2) 까지는 가능할 듯!
// => 투포인터?, 슬라이딩 윈도우?

// 일단 막풀기
// 역시 시간초과
function solutionFail(A) {
  let answer = 0;
  if (A.length === 3) return answer;

  for (let X = 0; X < A.length - 3; X++) {
    for (let Z = X + 2; Z < A.length; Z++) {
      for (let Y = X + 1; Y < Z; Y++) {
        let sum1 = 0;
        let sum2 = 0;
        if (Y - (X + 1) > 0) {
          sum1 = A.slice(X + 1, Y).reduce((acc, cur) => acc + cur);
        }

        if (Z - (Y + 1) > 0) {
          sum2 = A.slice(Y + 1, Z).reduce((acc, cur) => acc + cur);
        }

        if (sum1 + sum2 > answer) {
          answer = sum1 + sum2;
        }
      }
    }
  }

  return answer;
}

// 어차피 양끝은 포함 못시키니까 제외하고
// 나머지 배열의 총합을 기준으로 둔다.
// 앞쪽(X)에서 앞의 요소가 뒤의 요소보다 크거나 같을때까지 shift()
// 뒤쪽(Z)에서 뒤의 요소가 앞의 요소보다 크거나 같을때까지 pop()
// 남은 배열에서 최솟값을 찾아서 빼주면 끝!

function solutionFail2(A) {
  let answer = 0;
  const N = A.length;
  if (N === 3) return answer;

  A.shift();
  A.pop();

  while (A.length > 3) {
    if (A[0] >= 0) {
      break;
    } else {
      A.shift();
    }
  }

  while (A.length > 3) {
    if (A[A.length - 1] >= 0) {
      break;
    } else {
      A.pop();
    }
  }

  let min = 0;
  for (let i = 1; i < A.length; i++) {
    if (A[i] < A[min]) {
      min = i;
    }
  }

  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    if (i !== min) {
      sum += A[i];
    }
  }

  return sum;
}

// ------------------------------------------------------------------------------------
// 찐

// A = [3, 2, 6, -1, 4, 5, -1, 2] 일때
// 1. 앞 배열, 뒷 배열로 나눠서 각 최댓값을 구한다.
//  * A[0], A[N - 1]은 무슨짓을 해도 0임! (X, Y 가 각각 가질 수 있는 최댓값일 때 무조건 제외하므로)
//  1-1. 앞 배열의 경우
//  front = [A[0] = 0, A[0] + A[1], A[0] + A[1] + A[2], ... , A[0] + A[1] + ... + A[N - 3], 0, 0]
//       => [A[0], front[0] + A[1], front[1] + A[2] ... , front[] + ]
//  * 배열의 양 끝이 0인 이유 => X 뒤에 최소 2개(Y, Z)가 들어가야 하므로
//  * 배열의 끝에서 2번째 까지 0인 이유 => Y, Z가 가질 수 있는 최댓값이라서
// 1-2. 뒷 배열의 경우
//      앞 배열과 비슷하지만 순서를 반대로 뒤에서 부터!

//  * 이 때, 더할 때 값이 음수가 나온다면 0으로 할당한다
//    => 그 부분을 자르면 되기 때문에 => 목표는 최댓값을 구하는 것!
//    => 또한 Y = X + 1 or Z = Y + 1인 경우 사이 값이 없기 때문에 0을 넣어야 한다.

// 앞 배열 예시                              계산과정
// front = [0, 0, 0, 0, 0, 0, 0, 0]
//       => [0, 2, 0, 0, 0, 0, 0, 0]
//       => [0, 2, 8, 0, 0, 0, 0, 0]    <=  [0, 2, 2 + 6 = 8, 0, 0, 0, 0, 0]
//       => [0, 2, 8, 7, 0, 0, 0, 0]    <=  [0, 2, 8, 8 + (- 1) = 7, 0, 0, 0, 0]
//       => [0, 2, 8, 7, 11, 0, 0, 0]   <=  [0, 2, 8, 7, 7 + 4 = 11, 0, 0, 0]
//       => [0, 2, 8, 7, 11, 16, 0, 0]   <=  [0, 2, 8, 7, 11, 11 + 5 = 16, 0, 0]
//       => 여기까지
//
//  1-2. 뒷 배열의 경우 (앞 배열과 반대로 거꾸로 N - 2부터 역순으로 계산)
//  back = [0, 0, 0, 0, 0, 0, 0, 0]
//       => [0, 0, 0, 0, 0, 0, 0, 0]   <= [0, 0, 0, 0, 0, 0, -1 => 0, 0]
//       => [0, 0, 0, 0, 0, 5, 0, 0]   <= [0, 0, 0, 0, 0, 0 + 5 = 5, 0, 0]
//       => [0, 0, 0, 0, 9, 5, 0, 0]   <= [0, 0, 0, 0, 5 + 4 = 9, 5, 0, 0]
//       => [0, 0, 0, 8, 9, 5, 0, 0]   <= [0, 0, 0, 9 + (-1) = 8, 9, 5, 0, 0]
//       => [0, 0, 14, 8, 9, 5, 0, 0]   <= [0, 0, 8 + 6 = 14, 8, 9, 5, 0, 0]

// 2. Y는 1 <= Y <= N-2 의 범위를 가질 수 있다.
// front = [0, 2,  8,  7, 11, 16,  0,  0]
//   Y   =     y,  y,  y,  y,  y,  y
// back  = [0, 0, 14,  8,  9,  5,  0,  0]
// => X, Y, Z로 자른 합계 = front[y-1] + back[y+1]
// Y 범위를 순회하면서 최댓값 갱신

function solution(A) {
  let answer = 0;
  const N = A.length;

  if (N === 3) return answer;

  const front = Array(N).fill(0);
  const back = Array(N).fill(0);

  for (let i = 1; i < N - 2; i++) {
    const front_sum = front[i - 1] + A[i];
    if (front_sum > 0) {
      front[i] = front_sum;
    }
  }

  for (let i = N - 2; i > 1; i--) {
    const back_sum = back[i + 1] + A[i];
    if (back_sum > 0) {
      back[i] = back_sum;
    }
  }

  for (let y = 1; y <= N - 2; y++) {
    const based_on_Y = front[y - 1] + back[y + 1];
    if (based_on_Y > answer) {
      answer = based_on_Y;
    }
  }

  return answer;
}

console.log(solution([3, 2, 6, -1, 4, 5, -1, 2])); // 17
console.log(solution([3, 3, -1, 6, -1, 4, 5, -1, 2])); // 17

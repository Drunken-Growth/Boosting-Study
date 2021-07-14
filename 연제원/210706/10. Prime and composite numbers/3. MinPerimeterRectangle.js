// Find the minimal perimeter of any rectangle whose area equals N.

// An integer N is given, representing the area of some rectangle.

// The area of a rectangle whose sides are of length A and B is A * B, and the perimeter is 2 * (A + B).

// The goal is to find the minimal perimeter of any rectangle whose area equals N.
// The sides of this rectangle should be only integers.

// 넓이 N이 주어질 때, 최소 사각형 길이를 구해라!
// N = 30
// (1, 30) => 62
// (2, 15) => 34
// (3, 10) => 26
// (5, 6) => 22

// 풀이
// 정사각형에 가까울 수록 (너비, 높이가 비슷할 수록) 최솟값이 나온다.

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (Math.sqrt(N) % 1 === 0) return 4 * Math.sqrt(N);

  let width = Math.floor(Math.sqrt(N));
  let height;

  for (let i = width; i >= 1; i--) {
    if (N % i === 0) {
      width = i;
      height = N / width;
      break;
    }
  }

  return 2 * (width + height);
}

console.log(solution(30)); // 22

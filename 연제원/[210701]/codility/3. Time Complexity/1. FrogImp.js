// A small frog wants to get to the other side of the road.
// The frog is currently located at position X and wants to get to a position greater than or equal to Y.
// The small frog always jumps a fixed distance, D.

// Count the minimal number of jumps that the small frog must perform to reach its target.

// Write a function:
// function solution(X, Y, D);

// that, given three integers X, Y and D,
// returns the minimal number of jumps from position X to a position equal to or greater than Y.

// 문제
// 개구리가 X에 위치해있고, Y로 이동하려고 한다.
// 한번에 D 만큼 움직일 때, 최소 점프수를 구해라!

function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  return Math.ceil((Y - X) / D);
}

console.log(solution(10, 85, 30)); // 3

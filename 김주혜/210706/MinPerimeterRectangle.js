/* L10 - MinPerimeterRectangle*/

function solution(N) {
  let min = Infinity;
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      min = Math.min(min, 2 * (i + N / i));
    }
  }
  return min;
}

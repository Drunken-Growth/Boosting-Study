// 문제풀이
// N+1 까지의 합을 구한 후 A의 모든 요소의 합을 빼면 빠진 값이 나온다.

function solution(A) {
  if (A.length === 0) return 1;
  let nums = [];
  for (let i = 1; i <= A.length + 1; i++) {
    nums.push(i);
  }

  return (
    nums.reduce((acc, cur) => acc + cur) - A.reduce((acc, cur) => acc + cur)
  );
}

solution([2, 3, 1, 5]); // 4

function solution2(A) {
  if (A.length === 0) return 1;

  let n = A.length + 1;
  let sum = (n * (n + 1)) / 2;
  return sum - A.reduce((acc, cur) => acc + cur);
}

console.log(solution2([2, 3, 1, 5]));

/* 숫자 블록 */

function solution(blocks) {
  let pyramid = Array(blocks.length)
    .fill(0)
    .map((_, i) => Array(i + 1).fill(0));
  pyramid[0][0] = blocks[0][1];

  for (let i = 1; i < blocks.length; i++) {
    let start = blocks[i][0];
    pyramid[i][start] = blocks[i][1];

    // 왼쪽
    let left = start - 1;
    while (left >= 0) {
      pyramid[i][left] = pyramid[i - 1][left] - pyramid[i][left + 1];
      left--;
    }
    // 오른쪽
    let right = start + 1;
    while (right <= i) {
      pyramid[i][right] = pyramid[i - 1][right - 1] - pyramid[i][right - 1];
      right++;
    }
  }
  let ans = [];
  pyramid.forEach((b) => ans.push(...b));
  return ans;
}

console.log(
  solution([
    [0, 50],
    [0, 22],
    [2, 10],
    [1, 4],
    [4, -13],
  ])
);

console.log(
  solution([
    [0, 92],
    [1, 20],
    [2, 11],
    [1, -81],
    [3, 98],
  ])
);

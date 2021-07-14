// 프로그래머스 정수삼각형 - DP

function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        arr[i][j] = arr[i - 1][0] + arr[i][j];
      } else if (j === arr[i].length - 1) {
        arr[i][j] = arr[i - 1][j - 1] + arr[i][j];
      } else {
        arr[i][j] = Math.max(arr[i - 1][j - 1], arr[i - 1][j]) + arr[i][j];
      }
    }
  }
  return Math.max(...arr[arr.length - 1]);
}

let input = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
console.log(solution(input)); // 30

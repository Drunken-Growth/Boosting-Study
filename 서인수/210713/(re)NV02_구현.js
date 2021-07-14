// 1시간30분동안 풀긴풀었는데, 그냥 주먹구구식으로 디버깅하며 될 때까지 조금씩 바꿔가며 풀음....
// ref참고 필요하고 다시 풀어보는 것 필요함

// 문제이해
// 블록의 값은 바로 밑에 붙어있는 두 블록의 합이다.
// 갓주혜 코드 참고하여 다시풀기
// 주어진 피라미드 블록을 완성하여, 배열형태로 리턴하라

// 문제 접근
// 1. 피라미드 형태의 2차원 배열을 만든다.
// 2. 왼쪽부모의 위치는 i,j 일때 pyramid[i-1][j-1] 오른쪽 부모의 위치는 i,j일 때, pyramid[i-1][j]
// 3. 블록을 입력받아, 매블록의 왼쪽 전부, 오른쪽 전부를 채울 수 있는 만큼 채워준다.

// 배열의 길이 = (block.length + block.length+1) / 2
function solution(blocks) {
  let pyramid = Array(blocks.length)
    .fill(0)
    .map((_, idx) => Array(idx + 1).fill(null));

  pyramid[0][0] = blocks[0][1];
  console.log(pyramid);
  for (let i = 1; i < blocks.length; i++) {
    let [start, value] = blocks[i];
    pyramid[i][start] = value;
    let left = start - 1;
    while (left >= 0) {
      pyramid[i][left] = pyramid[i - 1][left] - pyramid[i][left + 1];
      left--;
    }
    let right = start + 1; //[0,1,1]  2, 3 , 2 // [start, right, i] // [1,2, 3]
    while (right <= i) {
      pyramid[i][right] = pyramid[i - 1][right - 1] - pyramid[i][right - 1];
      right++;
    }
  }
  console.log(pyramid);
  let result = [];
  pyramid.forEach((el) => {
    el.forEach((el2) => result.push(el2));
  });
  return result;
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

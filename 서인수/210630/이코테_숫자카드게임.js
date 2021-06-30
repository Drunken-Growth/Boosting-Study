// 문제이해
// 행을 선택하고, 그 행에서 가장 작은 숫자를 선택하는 규칙이 있을 떄, 뽑을 수 있는 가장 큰 수를 출력하는 문제

// 접근
// 어차피 각 행에서 최소값을 뽑으므로, 각 행을 최소값만 뽑아, 그 중 최대값을 뽑는 방법으로 접근

// 1. map을 통해 순회하며, 각 행의 최소값 도출
// 2. 최소값 중 최대값 출력

function solution(cards) {
  let minCards = cards.map((el) => Math.min(...el));
  console.log(Math.max(...minCards));
  return Math.max(...minCards);
}

solution([
  [3, 1, 2],
  [4, 1, 4],
  [2, 2, 2],
]); // 2
solution([
  [7, 3, 1, 8],
  [3, 3, 3, 4],
]); // 3

function solution(cards) {
  const minNums = cards.map((v) => Math.min(...v));
  return Math.max(...minNums);
}

console.log(
  solution([
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ])
); //2

console.log(
  solution([
    [7, 3, 1, 8],
    [3, 3, 3, 4],
  ])
); // 3

/*
1. 각 행들의 작은 수를 찾는다.
*/

// 숫자 카드 게임은 룰을 지키며 가장 높은 숫자가 쓰인 카드 한장을 뽑는 게임이다.

// 1. NxM 형태로 카드가 있다. N : 행, M : 열
// 2. 뽑고자 하는 카드가 포함되어 있는 행을 선택한다.
// 3. 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑는다.
// 4. 처음에 골라낼 행을 선택 시, 이후에 해당 행에서 가장 숫자가 낮은 카드를 뽑을 것을 고려해
//    최종적으로 가장 높은 숫자의 카드를 뽑을 수 있도록 전략을 세워라

function solution(cards) {
  const row = cards.length;
  const col = cards[0].length;

  for (let N = 0; N < row; N++) {
    cards[N].sort((a, b) => a - b);
  }

  let answer = 0;
  for (let N = 0; N < row; N++) {
    answer = Math.max(cards[N][0]);
  }
  return answer;
}

function solution(cards) {
  let answer = 0;
  for (let row = 0; row < cards.length; row++) {
    answer = Math.max(answer, Math.min(...cards[row]));
  }
  return answer;
}

console.log(
  solution([
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ])
); // 2

console.log(
  solution([
    [7, 3, 1, 8],
    [3, 3, 3, 4],
  ])
); // 3

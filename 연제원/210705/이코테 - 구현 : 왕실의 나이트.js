// 문제
// 행복 왕국의 왕실 정원은 체스판과 같은 8 x 8좌표 평면이다. 왕실 정원의 특정한 한 칸에 나이트가 서 있다.
// 나이트는 매우 충성스러운 신하로서 매일 무술을 연마한다.

// 나이트는 말을 타고 있기 때문에 이동을 할 때는 L자 형태로만 이동할 수 있으며 정원 밖으로는 나갈 수 없다.
// 나이트는 특정한 위치에서 다음과 같은 2가지 경우로 이동할 수 있다.

// 1. 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동하기
// 1. 수작으로 두 칸 이동한 뒤에 수평으로 한 칸 이동하기

// 이처럼 8 x 8 좌표 평면상에서 나이트의 위치가 주어졌을 때 나이트가 이동할 수 있는 경우의 수를 출력해라
// 왕실의 정원에서 행의 위치를 표현할 때는 1부터 8로 표현하며, 열 위치를 표현할 때는 a부터 h로 표현한다.

function solution(position) {
  const x = Number(position[1]);
  const y = position[0].charCodeAt() - 96;

  const step = [
    [-2, -1],
    [2, -1],
    [-2, 1],
    [2, 1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  let answer = 0;
  for (let val of step) {
    const [dx, dy] = val;
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 1 && nx <= 8 && ny >= 1 && ny <= 8) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("a1"));
console.log(solution("c2"));

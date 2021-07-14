function solution(location) {
  let result = 0;
  let x = isX(location[0]);
  let y = Number(location[1]);

  // 움직일 수 있는 모든 경우의 수
  let dx = [1, -1, 2, 2, 1, -1, -2, -2];
  let dy = [2, 2, 1, -1, -2, -2, -1, 1];

  for (let i = 0; i < 8; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 1 && nx <= 8 && ny >= 1 && ny <= 8) result += 1;
  }

  return result;
}

function isX(x) {
  if (x === "a") return 1;
  if (x === "b") return 2;
  if (x === "c") return 3;
  if (x === "d") return 4;
  if (x === "e") return 5;
  if (x === "f") return 6;
  if (x === "g") return 7;
  if (x === "h") return 8;
}

console.log(solution("a1")); // 2
console.log(solution("c2")); // 6

/*
1. 나이트가 움직일 수 있는 방법은 최대 8가지이다.
2. 8가지는 [1, -2], [1, 2], [-1, -2], [-1, 2], [-2, 1], [2, 1], [-2, -1], [2, -1] 이다.
3. 이동할 수 있는 좌표를 구한다.
4. 체스판을 벗어나면 무시하는 로직을 구한다.
  4.1 만약 1,1 에서 시작한다면 움직일 수 있는 모든 경우의 수를 더해보고, 이동이 가능한지 체크한다.
5, 만약 이동이 가능하면 카운팅을 한다.
6. 이동 가능한 경우의 수를 반환한다.
*/

function solution(pos) {
  function alphaToNum(alpha) {
    let change = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, h: 7, h: 8 };
    return change[alpha];
  }
  let y = Number(pos[1]);
  let x = alphaToNum(pos[0]);
  let cnt = 0;

  let possible = []; // 이동가능 경우의 수
  let move = [1, -1, 2, -2];
  for (let i = 0; i < move.length; i++) {
    let first = move[i];
    for (let j = 0; j < move.length; j++) {
      let second = move[j];
      if (i === j || first + second === 0) continue;
      possible.push([first, second]);
    }
  }
  for (let i = 0; i < possible.length; i++) {
    let [dy, dx] = possible[i];

    // 이동할 위치
    let nx = x + dx;
    let ny = y + dy;

    // 체스판안에 있는지 체크
    if (nx >= 1 && nx <= 8 && ny >= 1 && ny <= 8) cnt++;

    // x,y 초기화
    x = nx - dx;
    y = ny - dy;
  }

  return cnt;
}
console.log(solution("a1"));
console.log(solution("c2"));

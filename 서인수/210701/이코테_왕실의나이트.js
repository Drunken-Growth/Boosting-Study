//문제 이해
// 특정 좌표에서 조건에 따라 이동할 수 있는 좌표의 개수를 출력하는 문제

//접근
// 이동가능한 경우의 수가 8가지이므로, 8곳을 모두 이동 후 좌표평면 안에 있는지 여부를 판단하도록 함

// 문제풀이
// 1. 좌표계산이 편하도록, 알파벳좌표를 숫자좌표(y,x)로 변환
// 2. 8가지의 경우에서의 y,x 변화량을 possible 배열에 담기
// 3. possible 배열 순회
// 3.1) 예상 위치를 [ny, nx] 에 저장하고, 좌표평면 안에 있을 경우만 cnt++

function solution(pos) {
  function alphaToNum(alpha) {
    let change = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, h: 7, h: 8 };
    return change[alpha];
  }
  let y = Number(pos[1]);
  let x = alphaToNum(pos[0]);
  let cnt = 0;

  let possible = []; // 이동가능 경우의 수 만들기
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
  }

  return cnt;
}
console.log(solution("a1"));
console.log(solution("c2"));

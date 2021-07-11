// 주혜님 코드 참고하여, dfs로 그래프 문제 푸는 것 연습해봅니다.

function solution(places) {
  places = places.map((p) => p.map((el) => el.split("")));
  let ans = [];
  let distance = 1;
  for (let i = 0; i < places.length; i++) {
    // i는 방번호, j가 row, k가 col
    distance = 1;
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        if (places[i][j][k] === "P") {
          dfs(copyArr(places[i]), j, k, 0); // place(i번방), x(row), y(col), step
          if (distance === 0) break;
        }
      }
    }
    distance === 1 ? ans.push(1) : ans.push(0);
    // 1 or 0
  }
  return ans;

  function dfs(place, x, y, step) {
    // console.log(place[x][y]);
    place[x][y] = "V";
    let moves = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    let ables = [];
    if (step === 2) return;
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [x + moves[i][0], y + moves[i][1]];
      if (place[nx] && place[nx][ny] === "O") {
        place[nx][ny] = "X";
        ables.push([nx, ny]);
      } else if (place[nx] && place[nx][ny] === "P") {
        distance = 0;
        return;
      }
    }

    if (!ables.length) return;
    for (let i = 0; i < ables.length; i++) {
      let [nx, ny] = ables[i];
      dfs(place, nx, ny, step + 1);
    }
  }

  function copyArr(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      newarr.push([...arr[i]]);
    }
    return newarr;
  }
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
// [1,0,1,1,1]

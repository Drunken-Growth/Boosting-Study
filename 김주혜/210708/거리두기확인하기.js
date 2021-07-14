// 프로그래머스 - 거리두기 확인하기
function solution(places) {
  places = places.map((p) => p.map((el) => el.split("")));
  let ans = [];
  let distance = 1;
  for (let i = 0; i < places.length; i++) {
    distance = 1;
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        if (places[i][j][k] === "P") {
          dfs(copyArr(places[i]), j, k, 0);
          if (distance === 0) break;
        }
      }
    }
    distance === 1 ? ans.push(1) : ans.push(0);
    // 1 or 0
  }
  return ans;

  function dfs(place, x, y, step) {
    place[x][y] = "X";
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

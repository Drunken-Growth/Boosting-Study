// 1차풀이
//테케 30개 중 4개 통과 못험
function solution(places) {
  // 검사해야할 모든 위치
  let dPos = [
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
    [1, 1],
  ];
  let result = [];
  for (let i = 0; i < 5; i++) {
    let place = places[i].map((el) => el.split("")); //  [ 'POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP' ]
    // 매 위치마다 5번 검사하여 P 있는지 확인 ( (0,1), (0,2), (1,0),(2,0), (1,1))
    // P 있으면 그 사이에 X 있는 지 확인

    let isBreak = false;

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        for (let i = 0; i < 5; i++) {
          let [dRow, dCol] = dPos[i];
          if (row + dRow > 4 || col + dCol > 4) continue; // 좌표 넘어가면 continue
          if (place[row][col] !== "P") continue;
          if (place[row + dRow][col + dCol] === "P") {
            // i = 1 인데 왼쪽이 X 면 continue 검사좌표기준 오른쪽 2번째가 P일때 오른쪽 1번째가 X면 continue
            // i= 3 인데 위쪽이 X 면 continue
            // i = 4 인데 위,왼쪽이 X 면 continue

            if (i === 1 && place[row][col + 1] === "X") continue;
            if (i === 3 && place[row + 1][col] === "X") continue;
            if (
              i === 4 &&
              place[row][col + 1] === "X" &&
              place[row + 1][col] === "X"
            )
              continue;
            // console.log([row, col], [i], [dRow, dCol])
            result.push(0);
            isBreak = true;
            break;
          }
        }
        if (isBreak) break;
      }
      if (isBreak) break;
    }
    if (!isBreak) result.push(1);
  }
  return result;
}

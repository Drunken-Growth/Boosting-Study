// 문제이해
// 각 자리를 기준으로 2거리안에 사람이 위치할 시 방역수칙위반으로 0을 반환하는 문제.
// 단 사람과 사람사이 파티션이 위치할 경우 방역수칙을 지킨 것으로 한다. 전부 방역수칙 지키면 1을 리턴한다.

//접근방법
// 각 대기실의 모든 자리를 완전탐색한다.
// 1. 모든 자리 중 사람이 위치하는 경우(P), 예비 위반구역인 6곳(오른쪽+1, 오른쪽+2,아래+1, 아래+2, 오른쪽아래대각. 왼쪽아래대각)을 체크한다.
// 2.1 예비위반구역에 사람(P)이 1명이라도 존재할 경우 바로 0을 리턴한다.
// 2.2 단, 예비위반구역에 사람이 있을 때, 파티션이 있는 예외의 경우를 처리해준다.

// 2차 풀이 통과
// 체크해야할 곳이 5곳이 아니라 6곳임 (오른쪽+1, 오른쪽+2,아래+1, 아래+2, 오른쪽아래대각. 왼쪽아래대각)

function solution(places) {
  let dPos = [
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
    [1, 1],
    [1, -1],
  ]; //체크해야할 위반구역
  let result = [];
  for (let i = 0; i < 5; i++) {
    // 대기실은 5개
    let place = places[i].map((el) => el.split("")); // 각대기실분리 [ 'POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP' ]
    let isBreak = false; // 중간에 방역자 발견 시 바로 다음 대기실로 넘어갈 수 있도록 함.

    // 대기실 순회시작
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        // 위험위반구역 체크
        for (let i = 0; i < 6; i++) {
          let [dRow, dCol] = dPos[i];
          if (
            row + dRow < 0 ||
            col + dCol < 0 ||
            row + dRow > 4 ||
            col + dCol > 4
          )
            continue; // 좌표 넘어가면 continue
          if (place[row][col] !== "P") continue; // 사람이있는 곳만 체크
          if (place[row + dRow][col + dCol] === "P") {
            // 체크하는 위험위반구역에 사람이 존재하면 '0' 단 파티션 예외고려
            // i = 1이면, 검사위치 오른쪽 2번째가 P이므로, 오른쪽 1번째가 파티션(X)이면 방역OK(continue)
            // ...
            if (i === 1 && place[row][col + 1] === "X") continue;
            if (i === 3 && place[row + 1][col] === "X") continue;
            if (
              i === 4 &&
              place[row][col + 1] === "X" &&
              place[row + 1][col] === "X"
            )
              continue;
            if (
              i === 5 &&
              place[row][col - 1] === "X" &&
              place[row + 1][col] === "X"
            )
              continue;
            // console.log([row, col], [i], [dRow, dCol])
            // 파티션예외 아니라면 방역수칙위반으로 result에 0 Push
            result.push(0);
            // 다음 대기실로 넘어가기 위헤서 break 작동
            isBreak = true;
            break;
          }
        }
        if (isBreak) break;
      }
      if (isBreak) break;
    }
    // 하나의 대기실 모두 돌았는데 브레이크가 안걸렸으면 모두 통과이므로 방역수칙 잘지킴 (result 1 push)
    if (!isBreak) result.push(1);
  }
  return result;
}

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

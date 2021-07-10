// 대기실은 5개이며, 각 대기실은 5x5 크기입니다.
// 거리두기를 위하여 응시자들 끼리는 맨해튼 거리1가 2 이하로 앉지 말아 주세요.
// 단 응시자가 앉아있는 자리 사이가 파티션으로 막혀 있을 경우에는 허용합니다.

// 맨해튼 거리 : 두 테이블 T1, T2가 행렬 (r1, c1), (r2, c2)에 각각 위치하고 있다면, T1, T2 사이의 맨해튼 거리는 |r1 - r2| + |c1 - c2| 입니다.

// 대기실 별로 거리두기를 지키고 있으면 1, 한 명이라도 지키지 않고 있으면 0을 배열에 담아 return

// 제한 사항
// places의 행 길이(대기실 개수) = 5
// places의 각 행은 하나의 대기실 구조를 나타냅니다.
// places의 열 길이(대기실 세로 길이) = 5
// places의 원소는 P,O,X로 이루어진 문자열입니다.
// places 원소의 길이(대기실 가로 길이) = 5
// P는 응시자가 앉아있는 자리를 의미합니다.
// O는 빈 테이블을 의미합니다.
// X는 파티션을 의미합니다.
// 입력으로 주어지는 5개 대기실의 크기는 모두 5x5 입니다.
// return 값 형식
// 1차원 정수 배열에 5개의 원소를 담아서 return 합니다.
// places에 담겨 있는 5개 대기실의 순서대로, 거리두기 준수 여부를 차례대로 배열에 담습니다.
// 각 대기실 별로 모든 응시자가 거리두기를 지키고 있으면 1을, 한 명이라도 지키지 않고 있으면 0을 담습니다.

// 1. 확인하는 법
//  1-1. 거리를 지키지 않은 경우
//    P를 찍었을 때, 그 P의 좌표가 (a, b)라고 할 때 정사각형 45도 회전한 길이 2만큼 다확인
//
//            O
//          O O O
//        O O P O O
//          O O O
//            O
//
//    그 안에 P없으면 => 거리지킨거
//    있을 때 사이에 파티션이 있는 지 확인!
function solution(places) {
  const answer = [];
  for (let waiting_room of places) {
    answer.push(keep_distance(waiting_room));
  }

  return answer;
}

function change_2D_array(arr) {
  return arr.map((el) => el.split(""));
}

function keep_distance(waiting_room) {
  waiting_room = change_2D_array(waiting_room);
  // console.log("1", waiting_room);

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      // P를 만나면 확인
      if (waiting_room[row][col] === "P") {
        const exist = exist_another_people(row, col, waiting_room);
        // console.log("---1---");
        // console.log(`${row}행${col}열에 사람이 있고${waiting_room[row][col]}`);
        // console.log(exist);
        // 거리두기 구간안에 사람이 존재할 때
        if (exist) {
          // 파티션이 잘 설치되어 있는지 확인
          for (let another_people of exist) {
            // exist_partition_between 가 true면 거리두기 잘한 것
            // false 면 걍 코로나 걸려라
            if (
              !exist_partition_between([row, col], another_people, waiting_room)
            ) {
              return 0;
            }
          }
        }
        // 거리두기 구간안에 사람이 존재하지 않을 때
        else {
        }
      }
    }
  }

  return 1; // 지키면 1, 아니면 0
}

// P의 위치를 받아서 주위에 다른 P가 있는지 확인
// 있다면 그 사람들의 위치를 배열형태로 리턴해준다.
function exist_another_people(row, col, waiting_room) {
  const dRow = [0, 0, 1, 1, 1, 2];
  const dCol = [1, 2, -1, 0, 1, 0];

  const another_people = [];
  for (let i = 0; i < dRow.length; i++) {
    const nRow = row + dRow[i];
    const nCol = col + dCol[i];

    if (
      nRow >= 0 &&
      nRow < 5 &&
      nCol >= 0 &&
      nCol < 5 &&
      waiting_room[nRow][nCol] === "P"
    ) {
      another_people.push([nRow, nCol]);
    }
  }
  return another_people.length > 0 ? another_people : false;
}

// P의 위치에서 거리 내에 다른 P를 발견했을 때 파티션이 있는지 확인
// 거리내에 있는 경우는 2가지

// 1 번째
//            O
//          O O P
//        O O P O O
//          O O O
//            O
//

// 2 번째
//            O
//          O O O
//        O O P O P
//          O O O
//            O
//

// 3 번째 => 무조건 코로나 걸림
//            O
//          O O O
//        O O P P O
//          O O O
//            O
//

function exist_partition_between(people1, people2, waiting_room) {
  const Manhattan =
    Math.abs(people2[0] - people1[0]) - Math.abs(people2[1] - people1[1]);
  const distance = people2.map((el, idx) => el - people1[idx]);
  // 실제 맨하탄거리하고는 다르게 뺄셈으로 계산
  // 1. Manhattan = 0 => distance = [1, 1] 이면 사이에 파티션 두개 있어야 함
  // 2. Manhattan = 2 => distance = [+-2, 0], [0, +-2] 이면 사이에 파티션 하나만 있으면 됨
  // 3. Manhattan = 1 => distance = [+-1, 0], [0, +-1] 이면 코로나 걸림

  // console.log("다른사람과 차이", distance);

  if (Math.abs(Manhattan) === 0) {
    if (
      waiting_room[people1[0] + distance[0]][people1[1]] !== "X" ||
      waiting_room[people1[0]][people1[1] + distance[1]] !== "X"
    ) {
      return false;
    }
  } else if (Math.abs(Manhattan) === 2) {
    // row만 2 차이날 때
    if (distance[0]) {
      // 둘 사이에 파티션이 없다.
      if (waiting_room[people1[0] + distance[0] / 2][people1[1]] !== "X") {
        return false;
      }
    }
    // col만 2 차이날 때
    else {
      if (waiting_room[people1[0]][people1[1] + distance[1] / 2] !== "X") {
        return false;
      }
    }
  } else {
    return false;
  }

  return true; // true 면 거리두기 잘 한 것, false 면 바로 끝 이걸 사용하는 곳에서 break하고 0리턴하면 됨
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
); // [1, 0, 1, 1, 1]

// console.log(keep_distance(["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"]));
// console.log(keep_distance(["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]));

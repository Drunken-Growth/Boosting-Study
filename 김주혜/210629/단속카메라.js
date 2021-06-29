/* 프로그래머스 - 단속카메라
  1. 시간순으로 정렬 (아래처럼 끝나는 지점 기준으로, ---는 차량이 지나간 거리, ㅇ는 카메라위치)
     ----
        ㅇ
        ---
             ----- 
                 ㅇ 
                ---
  2. routes를 순회하면서, 최근카메라(pos)에 포착되지 않으면 (routes[i][0] > pos)
    => 카메라수(count) 증가, 카메라 새로설치 (pos 갱신)
 */

function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let count = 1;
  let pos = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    if (routes[i][0] > pos) {
      count++;
      pos = routes[i][1];
    }
  }
  return count;
}

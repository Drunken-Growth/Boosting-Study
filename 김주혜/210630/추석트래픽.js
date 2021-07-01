/** 프로그래머스 - 추석 트래픽
 *
 *  1. 데이터 형태 변환 (makeSec 함수)
 *     'hh:mm:ss.sss, 걸린시간s'
 *      => [시작시간, 끝난시간, 걸린시간]  (초단위로)
 *  2. 로그데이터(lines) 순회하면서
 *      해당로그의 (종료시간 + 1초) 이내에 몇개의 로그가 처리될 수 있는지 세기(cnt)
 *  3. cnt의 최댓값 반환 (초당 최대 처리량)
 *
 */

function solution(lines) {
  lines = lines.map((log) => makeSec(log));
  let max = 0;
  for (let i = 0; i < lines.length; i++) {
    let cnt = 1;
    let curEnd = lines[i][1];
    for (let j = i + 1; j < lines.length; j++) {
      let nextStart = lines[j][0];
      if (isInOneSec(curEnd, nextStart)) cnt++;
    }
    max = Math.max(max, cnt);
  }
  return max;
}

// (현재시간 ~ 현재시간 + 1초) 내에 처리되는 일인지
function isInOneSec(cur, next) {
  if (cur >= 0 && cur + 1 > next) return true;
  return false;
}

function makeSec(log) {
  log = log.split(" ").slice(1);
  log[0] = log[0].split(":").map((el) => Number(el));
  log[0] = log[0][0] * 3600 + log[0][1] * 60 + log[0][2];
  log[1] = Number(log[1].slice(0, log[1].length - 1));
  [log[0], log[1], log[2]] = [
    (log[0] - log[1] + 0.001).toFixed(3),
    log[0],
    log[1],
  ];
  return log;
}

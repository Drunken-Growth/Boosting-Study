/* 프로그래머스 - 셔틀버스 (구현) */

function solution(n, t, m, timetable) {
  let Q = timetable.map((t) => timeToMin(t)).sort((a, b) => a - b);
  let cur = 9 * 60;
  while (n > 1) {
    let cnt = m; // 최대인원
    while (cnt > 0) {
      if (cur >= Q[0]) Q.shift(); // 더뺴낼사람 없으면 종료
      cnt--;
    }
    n--;
    cur += t;
  }
  // 막차에서 제일 마지막애 -1분, 아무도 없으면 막차도착시간
  let lastCar = [];
  let cnt = m;
  while (cnt > 0) {
    if (cur >= Q[0]) lastCar.push(Q.shift());
    cnt--;
  }
  if (lastCar.length < m) return minToTime(cur);
  return minToTime(lastCar[lastCar.length - 1] - 1);

  // 09:00 기준 크루가 몇분 늦게 도착했는지
  function timeToMin(time) {
    let [H, M] = time.split(":").map((el) => Number(el));
    return H * 60 + M;
  }

  function minToTime(min) {
    let H = parseInt(min / 60) + "";
    if (H.length === 1) H = "0" + H;
    let M = (min % 60) + "";
    if (M.length === 1) M = "0" + M;
    return H + ":" + M;
  }
}

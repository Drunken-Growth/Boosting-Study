function solution(priorities, location) {
  // 대기목록은 전형적인 큐를 활용한 문제

  // 타겟 관리를 어떻게 할까.
  // 처음에 location을 다 기입해버리자.

  let Q = priorities.map((el, idx) => [el, idx]);
  //[ [ 2, 0 ], [ 1, 1 ], [ 3, 2 ], [ 2, 3 ] ]

  let target = priorities[location]; // 3
  let cnt = 0;

  while (Q.length !== 0) {
    let [deVal, idx] = Q.shift(); // [2, 0]
    if (Q.some((el) => el[0] > deVal)) {
      Q.push([deVal, idx]);
    } else {
      cnt++;
      if (deVal === target && idx === location) {
        return cnt;
      }
    }
  }
}

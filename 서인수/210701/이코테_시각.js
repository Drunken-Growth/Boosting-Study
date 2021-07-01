// 문제이해
// 00시 00분 00초 에서 N시 59분 59초 까지의 시각 중 '3'을 포함하는 시각의 모든 개수 출력

//접근
// h(24) * m(60) * s(60) 이 최대이므로 86400 가지이므로 완전탐색으로 충분히 연산가능하다. O(N^3) 가능

// 3중 루프를 통해 모든 time의 경우의 수를 구하고 3을 포함하고 있으면 cnt 올린다.

function solution(N) {
  let cnt = 0;

  for (let h = 0; h <= N; h++) {
    for (let m = 0; m < 60; m++) {
      for (let s = 0; s < 60; s++) {
        let time = String(h) + String(m) + String(s);
        if (time.includes("3")) cnt++;
      }
    }
  }
  return cnt;
}

console.log(solution(5)); // 11475

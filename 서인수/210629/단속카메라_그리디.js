function solution(routes) {
  // 접근
  // 그림그려서 이해함.

  // 풀이방법
  // 0.진입지점을 기준으로 오름차순 정렬한다.
  // 1. 경로를 순회하며, 현재 cctv의 시작지점,끝점과 다음경로의 시작점, 끝점을 비교한다.
  // 2.1) 만약 다음요소의 시작점 > 현재 끝점 이라면 빈공간 발생하므로 cctv설치 (cnt+1)
  // 2.2) 새로운 cctv의 범위로 바꾸어준다 (바꾼요소의 시작점과 끝점으로)

  // 3. 그렇지않다면 시작점은 둘 중 더 큰 값으로, 끝점은 둘중 작은 값으로 지정한다.

  let sortR = routes.sort((a, b) => a[0] - b[0]);

  let cnt = 1;
  let [start, end] = routes[0];

  for (let i = 1; i < routes.length; i++) {
    console.log([start, end]);
    if (routes[i][0] > end) {
      cnt++;
      start = routes[i][0];
      end = routes[i][1];
    } else {
      start = Math.max(start, routes[i][0]);
      end = Math.min(end, routes[i][1]);
    }
  }
  return cnt;
}

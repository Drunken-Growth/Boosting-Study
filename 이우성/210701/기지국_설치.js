function solution(n, stations, w) {
  let answer = 0;
  let range = w * 2 + 1;
  let start = 1;

  for (let station of stations) {
    if (station - w > start) {
      answer += Math.ceil((station - w - start) / range);
    }

    // 기지국 범위가 끝나고 그 다음 회색 블록 시작점
    start = station + w + 1;
  }

  // console.log(n - start + 1);
  return answer + Math.ceil((n - start + 1) / range);
}

/*

0. 시간복잡도: O(n) 미만 => 최대 2억이기 때문
1  stations를 돌면서 범위마다 기지국을 몇 개 설치할 수 있는지 찾는다. 
  1.1 (범위 * 2) + 1 = 기지국 전파 범위
  1.2 설치된 아파트 - w - 시작지점 = 회색 범위
2. 설치된 아파트 - w - 시작지점 / 기지국 범위 => 카운팅 = 기지국 최소 설치 수
3. for문은 마지막 기지국까지만 검사하고 다음 기지국이 끝난 시점으로 넘어간다.

*/

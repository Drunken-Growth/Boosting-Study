/** 프로그래머스 - 기지국 설치
 *  1. 기지국 오름차순으로 정렬
 *  2. [ -w, 4, 11, n+w+1 ]
 *     (맨앞쪽, 맨뒤쪽도 확인해야해서 앞뒤로 요소추가해둠)
 *  3. 순회하면서 각 기지국 사이에 추가되어야할 기지국 개수(answer) 계산
 *      기지국별 도달범위 사이 거리(dist) / 도달범위(range) => 구하고 올림처리
 *  4. 총 기지국 개수(answer) 반환
 */

function solution(n, stations, w) {
  let answer = 0;
  stations.sort((a, b) => a - b);
  stations = [-w, ...stations, n + 1 + w];
  for (let i = 0; i < stations.length - 1; i++) {
    let range = 2 * w + 1;
    let dist = stations[i + 1] - stations[i] - range;
    if (dist > 0) answer += Math.ceil(dist / range);
  }
  return answer;
}

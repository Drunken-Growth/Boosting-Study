function solution(n, stations, w) {
  let start = stations[0] - w;
  let end = stations[stations.length - 1] + w;

  let curEnd = stations[0] + w;

  let dist = [];

  dist.push(start - 1);
  dist.push(Math.max(n - end, 0));

  for (let i = 1; i < stations.length; i++) {
    let uninstallZone = stations[i] - w - curEnd - 1;
    dist.push(uninstallZone);
    curEnd = stations[i] + w;
  }

  return dist.reduce((acc, el) => {
    return acc + Math.ceil(el / (2 * w + 1));
  }, 0);
}
// 문제이해
// 기지국의 영향이 미치지 않는 곳이 없도록 기지국을 설치할 때의 최소 설치 개수

// 접근
// 그리디문제로 이해, 영향이 없는 공간의 크기를 배열에 담고, 각각 설치해야하는 기지국 개수를 구하여 더해준다.
// 기지국이 n개 있으면, 기지국의 영향을 받지못하는 공간은 n+1 개이다.
// ex) 기지국 2개라면 총 3개 (시작-기지국1), (기지국1-기지국2), (기지국3-끝) =>   || 1개  (기지국1)  2개  (기지국2)  3개  ||
// 영향을 받지 못하는 곳에서 설치해야 하는 기지국의 개수를 구한다.

//풀이방법
// 1. 출발점부터 첫시작노드까지거리 와 끝시작노드부터 끝노드까지 거리를 우선 담는다.
// 2. 각노드들 사이의 거리를 구해서 담는다.
//  2.1 노드들 사이의 거리는 앞의요소+w 와 뒤의요소-w 의 차이이다.
// 3. 모든 미설치거리를 순회하며 각 거리를 (2w+1)로 나눈 몫의 올림 만큼이 설치해야하는 기지국 수이다.
// (자기자신1, 좌우로 영향미치는 것 2w)

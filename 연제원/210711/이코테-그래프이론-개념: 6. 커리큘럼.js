// 문제

// 온라인 강의는 선수 강의가 있을 수 있는데, 선수 강의가 있는 강의는 선수 강의를 먼저 들어야만 해당 강의를 들을 수 있다.
// N개의 강의를 듣고자 한다.
// 모든 강의는 1~N번까지의 번호를 가진다.
// 또한 동시에 여러개의 강의를 들을 수 있다고 한다.

// 예를 들어 N=3일 때, 3번 강의의 선수 강의로 1번과 2번 강의가 있고, 1,2번 강의는 선수 강의가 없다고 가정한다.
// 1번 강의:30시간, 2번강의:20시간, 3번강의:40시간 이면

// 1번강의를 수강하기까지 최소시간 30시간, 2번강의를 수강하기까지 최소시간 20시간, 3번강의를 수강하기까지 최소시간 70시간이다.

// N개 강의가 주어졌을 때, N개 강의에 대해 수강하기까지 걸리는 최소 시간

// N : 강의 수
// lectures : 강의 정보 => [time = 각 강의의 시간, ... 값 : 선수 강의]

// 풀이
// 선수강의..? => 위상정렬
// 진입 차수!
// 간선 정보!

// 1. 진입 차수가 0인 노드를 `큐`에 넣는다.
// 2. `큐`가 빌 때까지 다음의 과정을 반복한다.
//   2-1. 큐에서 원소를 꺼내 해당 노드에서 출발하는 간선을 그래프에서 제거(진입 차수를 -1 한다.)한다.
//   2-2. 새롭게 진입차수를 0이 된 노드를 큐에 넣는다.
function solution(N, lectures) {
  // 진입 차수
  const indegree = Array(N + 1).fill(0);
  // 간선 정보
  const graph = Array(N + 1)
    .fill(0)
    .map(() => Array(0));
  const time_lecture = Array(N + 1).fill(0);

  // 일반 위상정렬과 반대로 진행?
  for (let i = 0; i < lectures.length; i++) {
    const [time, ...require] = lectures[i];
    time_lecture[i + 1] = time;
    for (let x of require) {
      graph[x].push(i + 1);
      indegree[i + 1]++;
    }
  }
  function topology_sort() {
    const result = [...time_lecture];
    const q = [];

    for (let i = 1; i <= N; i++) {
      if (indegree[i] === 0) {
        q.push(i);
      }
    }

    while (q.length > 0) {
      const now = q.shift();
      for (let next_lecture of graph[now]) {
        result[next_lecture] = Math.max(
          result[next_lecture],
          result[now] + time_lecture[next_lecture]
        );
        indegree[next_lecture]--;
        if (indegree[next_lecture] === 0) {
          q.push(next_lecture);
        }
      }
    }
    return result;
  }

  const answer = topology_sort();
  return answer;
}

console.log(solution(5, [[10], [10, 1], [4, 1], [4, 3, 1], [3, 3]]));

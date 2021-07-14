// 1. 컴퓨터의 연결 상태를 나타내는 배열 생성
// 2. 각 컴퓨터마다 연결된 모든 컴퓨터를 확인 => 1에서 생성한 배열 값을 1로
function solution(n, computers) {
  let answer = 0;
  // 1
  const visit = Array.from({ length: n }, () => 0);

  // 3. 방문 확인 배열을 순환
  //    모든 dfs가 끝났을 때 = 연결된 모든 컴퓨터를 찾았다 => 값 1 추가
  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      dfs(i);
      answer++;
    }
  }

  // 2. 연결된 모든 컴퓨터 확인하는 함수
  function dfs(idx) {
    // 현재 컴퓨터를 방문상태로 바꾼다.
    visit[idx] = 1;

    // 모든 컴퓨터들을 순환
    for (let i = 0; i < n; i++) {
      // computers[idx][i] === 1 은 현재 컴퓨터와 연결되어있다는 뜻
      // 무한루프를 방지하기 위해 !visit[i] 추가 => visit[i] === 0일때 조건 만족 => 방문하지 않은 곳
      if (computers[idx][i] === 1 && !visit[i]) {
        dfs(i);
      }
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // 1

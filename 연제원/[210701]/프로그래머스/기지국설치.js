// https://programmers.co.kr/learn/courses/30/lessons/12979

// 입력
// n : 연달아 있는 아파트
// stations : 기지국이 설치되어있는 아파트 위치
// w : 기지국의 전파 도달 거리 (양쪽으로 w만큼)

// 출력
// 모든 아파트에 전파를 전달하기 위해 '증설' 해야할 기지국 개수의 최솟값

// 풀이
// 1. 배열 형태로 기존에 기지국이 설치되어있는 아파트와 전파가 전달되는 곳을 1로 둔다, 아닌 곳은 0
// 2. 최소 기지국 개수 = 0의 최대 거리 / (2 * w + 1) 를 올림
// => 효율성 실패

// 단순 계산방법 이용!

function solution(n, stations, w) {
  let answer = 0;
  // pos = 전파가 닿지 않는 구간의 시작점 => 1로 초기화
  let pos = 1;
  // range = 전파가 닿을 수 있는 범위
  const range = 2 * w + 1;

  stations.forEach((el) => {
    // 전파가 왼쪽으로 뻗었을 때 안 닿을 경우
    if (el - w > pos) {
      // pos ~ el-w 까지가 전파가 통하지 않는 구간
      // => 전파의 범위를 나눠서 올림해줌 === 필요한 기지국의 갯수
      answer += Math.ceil((el - w - pos) / range);
    }
    // 기지국을 설치했으므로 el + w 까지 전파가 도달한다.
    // 그러므로 전파가 도달하지 않는 곳(일 수도 있는) el + w + 1로 다시 시작점으로
    pos = el + w + 1;
  });

  // 마지막에 추가한번 더 해줘야 함
  return answer + Math.ceil((n - pos + 1) / range);
}

console.log(solution(11, [4, 11], 1)); // 3
console.log(solution(16, [9], 2)); // 3

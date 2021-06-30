//1차 풀이 실패
// 회전값을 변경할 때, 꼭지점에 있는 value가 바뀐 이후 요소가 반영되는 오류있음

function solution(rows, columns, queries) {
  //1. 행렬 그래프 만들기
  let graph = [];
  for (let row = 0; row < rows; row++) {
    graph[row] = [];
    for (let col = 0; col < columns; col++) {
      graph[row][col] = rows * row + col + 1;
    }
  }
  graph.map((el) => el.unshift(0));
  graph.unshift(
    Array(columns + 1)
      .fill(null)
      .map(() => 0)
  );
  // console.log(graph)

  let nums = Array(queries.length)
    .fill(null)
    .map(() => Array());
  //2. 쿼리를 통해 해당하는 요소들 arr에 담기
  for (let i = 0; i < queries.length; i++) {
    let [y1, x1, y2, x2] = queries[i];

    //넣기.
    for (let x = x2 - x1; x <= x2; x++) {
      nums[i].push(graph[y1][x]);
      nums[i].push(graph[y2][x]);
    }
    for (let y = y1 + 1; y < y2; y++) {
      nums[i].push(graph[y][x1]);
      nums[i].push(graph[y][x2]);
    }

    // 바꾸기 (위줄 가로)
    for (let x = x2; x > x1; x--) {
      // console.log([graph[y1][x], graph[y1][x-1]])
      graph[y1][x] = graph[y1][x - 1];
    }

    // 오른쪽 세로
    for (let y = y2; y > y1; y--) {
      // console.log([graph[y][x2], graph[y-1][x2]])
      graph[y][x2] = graph[y - 1][x2];
    }

    // 아래줄 가로
    for (let x = x1; x < x2; x++) {
      graph[y2][x] = graph[y2][x + 1];
    }
    // 왼쪽 세로
    for (let y = y1; y < y2; y++) {
      graph[y][x1] = graph[y + 1][x1];
    }

    // console.log(graph)
  }

  //3. arr의 최소 값 출력하기
  let answer = [];
  nums.map((el) => answer.push(Math.min(...el)));
  return answer;
}

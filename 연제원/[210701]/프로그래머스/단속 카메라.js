// https://programmers.co.kr/learn/courses/30/lessons/42884

// Input
// routes : 고속도로를 이동하는 차량의 경로

// Output
// 모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 최소 몇 대의 카메라를 설치해야 하는지를 return

// 일단 그리디라니깐 그리디로..!
// routes의 각 요소를 route라고 했을 때, route[0]은 진입 지점, route[1]은 나간 지점
//   => 딱 그 지점에 있어도 만난 것으로 간주 (-30000 <= 지점 <= 30000)

// 풀이
// 1. 각 차량의 진출시점을 기준으로 오름차순으로 정렬한다.
// 2. 차량의 진출시점을 카메라 위치로 잡는다. (1개부터 시작)
// 3. 다음 차량의 진입 시점이 전(현재) 차량의 진출 시점보다 클 때만 카메라를 추가
//    + 카메라 위치를 다음 차량의 진출 시점으로 수정

function solution(routes) {
  let answer = 1;

  // 진출 시점을 기준으로 오름차순 정렬
  routes.sort((a, b) => a[1] - b[1]);

  let out = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    // console.log("--------계산 전 시작---------");
    // console.log("진입", routes[i][0]);
    // console.log("진출", routes[i][1]);
    // console.log("카메라 위치", out);
    // console.log("카메라 수", answer);
    // console.log("--------계산 전 끝---------");

    if (routes[i][0] > out) {
      answer++;
      out = routes[i][1];
    }
    // console.log("--------계산 후 시작---------");
    // console.log("진입", routes[i][0]);
    // console.log("진출", routes[i][1]);
    // console.log("카메라 위치", out);
    // console.log("카메라 수", answer);
    // console.log("--------계산 후 끝---------");
  }

  return answer;
}

console.log(
  solution([
    [-20, 15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
); // 2

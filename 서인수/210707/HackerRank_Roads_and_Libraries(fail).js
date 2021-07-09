// 30분 고민 후 아이디어 떠오르지 않아 구글링참고

// 문제이해
// 모든 도시가 도서관이 연결될 수 있도록 하는 최소비용을 구하는 문제

// 각 도시와 도서관 건설비용, 도시들간의 연결관계를 나타내는 배열을 입력받는다.

// 2차풀이
function solution(n, m, c_lib, c_road, cities) {
  let graph = Array.from({ length: n }, () =>
    Array.from({ length: n }).fill(0)
  );

  cities.map((el) => {
    let [from, to] = el;
    graph[from - 1][to - 1] = 1;
    graph[to - 1][from - 1] = 1;
  });

  if (c_road > c_lib) {
    // 모든 도시에 도서관 건설
    return n * c_lib;
  } else {
    let visited = Array.from({ length: n }).fill(false);
    let cnt_road = 0;
    for (let i = 0; i < n; i++) {
      if (visited[i] === false) {
        check(i);
      }
    }

    // 특정 노드에 연결되어있는 간선의 수 센다.
    function check(node) {
      for (let i = 0; i < n; i++) {
        if (graph[node][i] === 1 && !visited[i]) {
          // 연결되어있으면
          visited[i] = true;
          cnt_road++;
          console.log([node, i]);
        }
      }
    }
    // 헤딩 노드와 연결되어 있는 모든 경우를 세고, 가장 cnt가 적은 것으로
    // dfs(cities[0][0], cities[0][1]);

    // 비용 = (도로연결개수 * 도로비용) + (dfs실행횟수) * 도서관비용
    return cnt_road * c_road + (m - n) * c_lib;
  }
}

//망한 풀이//

// function solution(n, m, c_lib, c_road, cities) {
//   // 인접행렬 만들기
//   let graph = Array.from({ length: n + 1 }, () =>
//     Array.from({ length: n + 1 }).fill(0)
//   );
//   cities.map((el) => {
//     let [from, to] = el;
//     graph[from][to] = 1;
//     graph[to][from] = 1;
//   });
//   console.log(graph);

//   let cnt_road = 0;
//   let visited = Array.from({ length: n + 1 }, () => 0);
//   visited[0] = 1;
//   console.log(visited);
//   function dfs(start, end) {
//     console.log([start, end]);
//     visited[start] = 1;
//     if (graph[start][end] === 0 || visited[end] === 1) {
//       return;
//     }

//     if (visited[end] === 0) {
//       cnt_road++;
//       console.log("cnt++");
//     }
//     visited[end] = 1;

//     for (let i = 1; i <= n; i++) {
//       if (graph[end][i] === 1 && visited[i] === 0) {
//         dfs(end, i);
//       }
//     }
//   }
//   if (c_road > c_lib) {
//     // 모든 도시에 도서관 건설
//     return n * c_lib;
//   } else {
//     // 도로의 연결최고 최소연결도로개수를 구한다
//     // for (let i = 0; i < m; i++) {
//     dfs(cities[0][0], cities[0][1]);
//     // }
//     console.log("v" + visited);
//     for (let i = 0; i < visited.length; i++) {
//       if (visited[i] === 0) {
//         dfs(0, i);
//       }
//     }
//     console.log("cnt_road:" + cnt_road);
//     // 비용 = (도로연결개수 * 도로비용) + (마을수-도로연결개수) * 도서관비용
//     return cnt_road * c_road + (n - cnt_road) * c_lib;
//   }
// }

// console.log(
//   solution(3, 3, 2, 1, [
//     [1, 2],
//     [3, 1],
//     [2, 3],
//   ])
// );
// console.log(
//   solution(6, 6, 5, 2, [
//     [1, 3],
//     [3, 4],
//     [2, 4],
//     [1, 2],
//     [2, 3],
//     [5, 6],
//   ])
// );
console.log(
  solution(8, 6, 3, 2, [
    [1, 7],
    [1, 3],
    [1, 2],
    [2, 3],
    [5, 6],
    [6, 8],
  ])
);

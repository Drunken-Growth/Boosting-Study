// 문제

// 해커랜드의 모든 시믿들이 접근할 수 있는 도서관을 짓는데 필요한 최소 비용을 도출해라!
// 1~n 번호가 주어진 n개의 도시가 있다.
// 연결되지 않은 도시, 도서관은 없다.
// 양방향 도로는 cities 배열에 속한 짝대로 지어질 것이다.
// 시민들은 다음 조건일때 도서관에 접근할 수 있다.
// * 도시가 도서관을 포함한다.
// * 도서관을 포함한 도시끼리 도로를 통해 여행할 수 있다.

// n : 도시 수
// m : 연결가능한 도로의 수
// c-road : 도로 짓는 비용
// c-lib : 도서관 짓는 비용
// cities : 연결할 수 있는 도시의 짝

// 한바퀴 도는 건 필요없다?

// q 쿼리가 주어지는데, 해커랜드의 맵, c_lib, c_road가 주어진다.

// cities 배열에서 도로를 연결할 수 있는지 찾고, 도로만 연결되어 있으면 도서관은 하나만 지어도 되니깐
// 최소 도서관, 도로 비용을 구해라~!

// 도로 짓는 것 보다 도서관을 각 도시에 짓는게 저렴할 수 있다..!

// 섬 찾기 + 찾고나서 도서관, 도로 가격 비교

// 객체로?

// 풀이
// 1. cities에서 섬 찾기
//   1-1. 2차원 배열로 하지말고 그냥 1차원 배열로 방문한지 안한지 확인!
// 2. 한 섬당 도시개수를 count(>= 2)라고 할 때 가장 싼 가격은 무조건 둘 중에 하나임
//   2-1. 도서관 비용 > 도로 비용 : 1*도서관 + (count - 1)*도로
//   2-2. 도서관 비용 < 도로 비용 : count*도서관
//   2-3. 도서관 비용 = 도로 비용 : 아무값이나

function solution(n, cities_size, c_lib, c_road, cities) {
  const map = {};
  for (let x of cities) {
    const [from, to] = x;
    if (!map[from]) {
      map[from] = [to];
    } else {
      map[from].push(to);
    }

    if (!map[to]) {
      map[to] = [from];
    } else {
      map[to].push(from);
    }
  }

  const visit = Array(n + 1).fill(false);
  visit[0] = true;

  const all = [];
  let all_city_count_per_one_connect = 0;

  const dfs = (city = 1) => {
    visit[city] = true;
    all_city_count_per_one_connect += 1;

    const possible_move = map[city] || [];
    for (let next_city of possible_move) {
      // 현재 도시에서 갈 수 있는 도시 중에
      // 방문하지 않은 곳을 방문
      if (!visit[next_city]) {
        dfs(next_city);
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    if (!visit[i]) {
      dfs(i);
      all.push(all_city_count_per_one_connect);
      all_city_count_per_one_connect = 0;
    }
  }

  // 최소 비용
  let min_cost = 0;

  // 도서관이 도로보다 비쌀 때
  // => 도서관 1개 짓고 나머지 다 도로 연결
  if (c_lib > c_road) {
    for (let x of all) {
      // 도시가 혼자인 경우 어쩔 수 없이 도서관 설치
      if (x === 1) {
        min_cost += c_lib;
      } else {
        min_cost += c_lib + (x - 1) * c_road;
      }
    }
  } else {
    for (let x of all) {
      min_cost += x * c_lib;
    }
  }

  return min_cost;
}

console.log(
  solution(3, 3, 2, 1, [
    [1, 2],
    [3, 1],
    [2, 3],
  ])
); // 4

console.log(
  solution(6, 6, 2, 5, [
    [1, 3],
    [3, 4],
    [2, 4],
    [1, 2],
    [2, 3],
    [5, 6],
  ])
); // 12

/* 프로그래머스 튜플
  1. 2차원 배열 형태로 변경
  2. 길이순으로 정렬 (짧은것부터)
  3. map에 set (중복제거 과정)
  4. map의 키를 순회하며 answer 배열에 push
*/

function solution(s) {
  let map = new Map();
  let answer = [];
  let tuples = s.substr(2, s.length - 4).split("},{");
  tuples = tuples.map((n) => n.split(",").map((el) => Number(el)));
  tuples.sort((a, b) => a.length - b.length);
  tuples.forEach((tuple) => tuple.forEach((num) => map.set(num, 1)));

  for (let key of map.keys()) {
    answer.push(key);
  }
  return answer;
}

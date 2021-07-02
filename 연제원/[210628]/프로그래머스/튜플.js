// 풀이
// s가 문자열로 주어진다.
// 1. 양 끝 '{{', '}}' 을 지운다.
// 2. '},{' 를 기준으로 split한다.
// 3. 각 요소를 ','를 기준으로 split하고 모든 요소를 숫자로 바꾼다.
// 4. 길이 순서대로 정렬한다.
// 5. set 객체를 통해 중복제거 후 배열로 반환
function solution(s) {
  const arr = s
    .replace("{{", "")
    .replace("}}", "")
    .split("},{")
    .map((el) => el.split(",").map((el) => parseInt(el)))
    .sort((a, b) => a.length - b.length);

  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      set.add(arr[i][j]);
    }
  }

  return Array.from(set);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2,1,3,4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // [2,1,3,4]
console.log(solution("{{20,111},{111}}")); // [110, 20]
console.log(solution("{{123}}")); // [123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); // [3,2,4,1]

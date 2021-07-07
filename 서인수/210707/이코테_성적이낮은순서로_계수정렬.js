/* 문제이해
 이름과 성적이 세트로 담긴 학생 배열을 받아서, 성적이 낮은 순으로 정렬하여 리턴하는 문제

 시간복잡도
 N의 최대는 10만이므로, NlogN으로 정렬해야함.
 퀵정렬, 게수정렬 사용가능

 요소의 크기가 최대 100이므로, O(N+k)를 보장하는 계수 정렬 방법 사용해봄
*/
function solution(input) {
  let sorted_arr = Array.from({ length: 101 }).map(() => null);
  let result = [];
  input.map((el) => {
    if (el[1] >= 0) {
      sorted_arr[el[1]] = [el[0], Number(el[1])];
    }
    return el;
  });

  sorted_arr.filter((el) => {
    if (el !== null) {
      result.push(el[0]);
      return el;
    }
  });
  return result;
}

console.log(
  solution([
    ["홍길동", 95],
    ["이순신", 77],
    ["서인수", 100],
    ["아웃워터", 0],
  ])
); // 아웃워터 이순신 홍길동 서인수

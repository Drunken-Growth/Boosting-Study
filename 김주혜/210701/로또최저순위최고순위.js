/* 프로그래머스 - 로또의 최고 순위와 최저 순위
  1. 해시테이블 생성 (맞춘개수 : 순위)
  2. 0개수 세기
  3-1. 최고순위 = 0개수 + 맞은 개수 (0은 다 맞은걸로 가정)
  3-2. 최저순위 = 맞은 개수 (0은 다 틀린걸로 가정)
*/

function solution(lottos, win_nums) {
  let hash = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  let zeros = lottos.filter((n) => n === 0).length;
  let min = lottos
    .filter((n) => n > 0)
    .filter((n) => win_nums.includes(n)).length;
  return [hash[min + zeros], hash[min]];
}

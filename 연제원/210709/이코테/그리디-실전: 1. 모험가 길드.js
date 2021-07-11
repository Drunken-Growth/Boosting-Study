// 문제
// 한 마을에 모험가가 N명이 있고, 각각 공포도가 있다.
// 공포도가 높으면 쉽게 공포를 느껴 대처능력이 떨어진다.
// 모험가 그룹을 안전하게 구성하고자 공포도가 X인 모험가는 반드시 X명 이상으로 구성한 모험가 그룹에 참여해야 여헹을 떠날 수 있다.
// 최대 몇개의 모험가 그룹을 만들 수 있는지!

function solution(people) {
  people.sort((a, b) => a - b);

  let team = 0;
  let count = 0;

  for (let horror of people) {
    count++;

    if (horror === count) {
      team++;
      count = 0;
    }
  }

  return team;
}

console.log(solution([2, 3, 1, 2, 2])); // 2

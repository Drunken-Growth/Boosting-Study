function solution(people, limit) {
  people = people.sort((a, b) => a - b);
  let max = people.length - 1;
  let min = 0;
  let answer = 0;

  while (min <= max) {
    if (people[min] + people[max] <= limit) {
      min += 1;
    }

    max -= 1;
    answer += 1;
  }

  return answer;
}

/*
1. 최대 2명씩 탈 수 있다.
2. people을 정렬하고 앞에서부터 맨 뒤에 요소랑 더하면서 체킹
*/

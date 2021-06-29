function solution(priorities, location) {
  let answer = 0;

  while (priorities.length !== 0) {
    location = location - 1;
    if (priorities[0] < Math.max(...priorities)) {
      // 자신이라면
      if (location < 0) {
        location = priorities.length - 1;
      }

      // 우선순위가 아니면 맨 뒤로 보낸다.
      priorities.push(priorities.shift());
    } else {
      answer += 1;

      // 우선순위가 자신이라면
      if (location < 0) {
        return answer;
      } else {
        priorities.shift();
      }
    }
  }
}

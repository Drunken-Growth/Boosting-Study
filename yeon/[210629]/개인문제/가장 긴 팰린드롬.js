// https://programmers.co.kr/learn/courses/30/lessons/12904

// 1. 기본값으로 s 문자열의 길이를 정답이라고 생각한다/
// 2. 길이 순대로 순환해서 팰린드롬인지를 판단한다.
//   2-1. 맞다면 바로 정답 리턴
//   2-2. 아니라면 길이를 1 줄인다. (기준이 하나 존재하므로 무조건 홀수라서)

// 기존에 팰린드롬인지 확인할 때 reverse() 메소드를 확인했는데 효율성 테스트 1을 통과 못함
// => check함수 생성

function solution(s) {
  let answer = s.length;
  while (answer > 1) {
    for (let i = 0; i <= s.length - answer; i++) {
      const word = s.slice(i, i + answer);
      if (check(word)) return answer;
    }
    answer -= 1;
    if (answer === 1) return 1;
  }

  return answer;
}

function check(str) {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

console.log(solution("abcdcba")); // 7
console.log(solution("abacde")); // 3

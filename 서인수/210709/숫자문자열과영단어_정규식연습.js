// 제원님 풀이 코드 참고하여, 적어보며 정규식 연습해봅니다.
function solution(s) {
  const change = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const regex = new RegExp(
    /zero|one|two|three|four|five|six|seven|eight|nine/gi
  ); // === /zero|one|two|three|four|five|six|seven|eight|nine/gi
  const change_function = (x) => {
    return change[x];
  };
  let str = s.replace(regex, change_function);

  return Number(str);
}

console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); // 234567
console.log(solution("123")); // 123

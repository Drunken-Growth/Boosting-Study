// https://programmers.co.kr/learn/courses/30/lessons/81301

// 네오와 프로도가 숫자놀이를 하고 있습니다.
// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"

// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나,
// 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
// s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

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

  let answer = "";
  let str = "";

  for (let x of s) {
    // 숫자일 때
    if (!isNaN(Number(x))) {
      str = "";
      answer += x;
    }
    // 문자일 때
    else {
      str += x;
      if (change[str]) {
        answer += change[str];
        str = "";
      }
    }
  }
  return Number(answer);
}

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
    /zero|one|two|three|four|five|six|seven|eight|nine|\d/gi
  );
  let arr = s.match(regex);
  let answer = "";
  for (let x of arr) {
    if (isNaN(Number(x))) {
      answer += change[x];
    } else {
      answer += x;
    }
  }
  return Number(answer);
}

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
  );
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

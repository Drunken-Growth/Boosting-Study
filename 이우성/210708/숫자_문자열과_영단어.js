function solution(s) {
  const word = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer = [];
  let check_word = "";

  for (let i = 0; i < s.length; i++) {
    // s[i]가 숫자일 경우
    if (!isNaN(s[i])) {
      answer.push(check_word);
      answer.push(s[i]);
      check_word = "";
    } else {
      if (words.includes(check_word)) {
        answer.push(check_word);
        check_word = "";
      }
      check_word += s[i];
    }
  }
  answer.push(check_word);

  let result = "";

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "") continue;
    else if (words.includes(answer[i])) {
      result += word[answer[i]];
    } else {
      result += answer[i];
    }
  }

  return Number(result);
}

/*
1. 영단어 객체를 만든다.
2. s를 반복문으로 돌면서 객체에 있는 값이면 해당 숫자로 바꾸어준다.
*/

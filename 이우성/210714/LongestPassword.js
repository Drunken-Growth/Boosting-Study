// 주혜님 코드 보면서 공부함

function solution(S) {
  let words = S.split(" ");
  let answer = 0;

  for (let word of words) {
    if (isValid(word)) {
      answer = Math.max(answer, word.length);
    }
  }

  return answer === 0 ? -1 : answer;
}

function isValid(word) {
  let [letter, digit] = [0, 0];

  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[a-zA-Z]/g)) letter++;
    else if (word[i].match(/[0-9]/g)) digit++;
    else return false;
  }
  if (letter % 2 !== 0) return false;
  if (digit === 0 || digit % 2 === 0) return false;

  return true;
}

/**
 * 유효한 비번이 없으면 -1을 반환
 */

/* Codility - Longest Password */

function solution(S) {
  let words = S.split(" ");
  let maxLen = 0;
  for (let word of words) {
    if (isValid(word)) {
      maxLen = Math.max(maxLen, word.length);
    }
  }
  return maxLen === 0 ? -1 : maxLen;

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
}

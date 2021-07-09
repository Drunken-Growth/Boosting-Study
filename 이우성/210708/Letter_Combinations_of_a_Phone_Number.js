// 리트코드 - letter-combinations-of-a-phone-number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  let replace_digit = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let answer = [];

  function combination(str, idx) {
    if (idx === digits.length) {
      answer.push(str);
      return;
    }

    for (let letter of replace_digit[digits[idx]]) {
      combination(str + letter, idx + 1);
    }
  }

  combination("", 0);
  return answer;
};

/*
문제 파악
1. 번호는 0, 1, 2, 3, 4 까지 있다.
2. 조합의 범위는 2부터 9까지이다.
3. 
*/

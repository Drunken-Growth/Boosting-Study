/* 리트코드 17. Letter Combinations of a Phone Number  */

var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const letters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let arr = [];
  for (let i = 0; i < digits.length; i++) {
    arr.push(letters[digits[i]]);
  }

  let ans = [];
  com([], 0, arr.length);
  return ans;

  function com(coms, idx, n) {
    if (coms.length === n) {
      ans.push(coms.join(""));
      return;
    }
    for (let i = 0; i < arr[idx].length; i++) {
      com([...coms, arr[idx][i]], idx + 1, n);
    }
  }
};

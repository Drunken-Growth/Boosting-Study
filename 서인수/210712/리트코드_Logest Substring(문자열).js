// Easy -> 다시풀어보기(세모)
// 문제((https://leetcode.com/problems/longest-substring-without-repeating-characters/))
// 문제이해

// 현재 문자열을 관리한다.
// 반복되는 문자 발생시, 현재 문자열의 길이를 result.push() 하고, 현재문자열을 중복발생문자 이후 부터로 설정한다.

var lengthOfLongestSubstring = function (s) {
  const result = [];
  let curStr = ""; // a

  for (let i = 0; i < s.length; i++) {
    if (curStr.includes(s[i])) {
      result.push(curStr.length);
      let start = curStr.indexOf(s[i]);
      curStr = curStr.slice(start + 1) + s[i];
    } else {
      curStr += s[i];
    }
  }
  result.push(curStr.length);
  return Math.max(...result);
};

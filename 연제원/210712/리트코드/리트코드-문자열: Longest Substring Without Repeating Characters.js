// Given a string s, find the length of the longest substring without repeating characters.
// 같은 단어가 없이 가장 긴 단어의 길이를 리턴

// 0 <= s.length <= 5 * 10^4

// 내 풀이
const lengthOfLongestSubstring = function (s) {
  const n = s.length;
  const set = new Set();
  let start = 0;
  let end = 0;
  let answer = 0;
  while (end < n) {
    const x = s[end];
    if (set.has(x)) {
      set.delete(s[start]);
      start++;
    } else {
      set.add(x);
      answer = Math.max(answer, set.size);
      end++;
    }
  }

  return answer;
};

// 다른 사람 풀이
const lengthOfLongestSubstring = function (s) {
  let answer = 0;
  let current = "";
  for (let i = 0; i < s.length; i++) {
    current = current.substring(current.indexOf(s[i]) + 1);
    current += s[i];
    if (current.length > answer) {
      answer = current.length;
    }
  }
  return answer;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring(" ")); // 1

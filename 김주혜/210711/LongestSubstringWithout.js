/* LeetCode 3. Longest Substring Without Repeating Characters (문자열) */

var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let i = 0;
  while (i < s.length) {
    let j = i;
    let map = new Map();
    let cnt = 0;
    while (s[j] && !map.get(s[j])) {
      map.set(s[j], 1);
      j++;
      cnt++;
    }
    ans = Math.max(ans, cnt);
    i++;
  }
  return ans;
};

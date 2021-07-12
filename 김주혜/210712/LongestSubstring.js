/* LeetCode 3. Longest Substring Without Repeating Characters (문자열) 
  어제풀이 - 412ms / 오늘풀이 - 216ms
*/

var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let exist = {};
  let right = 0;
  for (let left = 0; left < s.length; left++) {
    while (right < s.length && !exist[s[right]]) {
      exist[s[right]] = true;
      right++;
    }
    ans = Math.max(ans, right - left);
    exist[s[left]] = false;
  }
  return ans;
};

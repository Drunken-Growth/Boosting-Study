// 프로그래머스 가장 긴 팰린드롬
// Leetcode 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
// 동일 문제

var longestPalindrome = function(s) {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    const cur1 = findLongestPalindrome(s, i, i);
    const cur2 = findLongestPalindrome(s, i, i + 1);
    const longerPalindrome = cur1.length > cur2.length ? cur1 : cur2;
    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }
  return longest.length;
};

const findLongestPalindrome = (str, i, j) => {
  while (i >= 0 && j < str.length && str[i] === str[j]) {
    i -= 1;
    j += 1;
  }
  return str.slice(i + 1, j);
}
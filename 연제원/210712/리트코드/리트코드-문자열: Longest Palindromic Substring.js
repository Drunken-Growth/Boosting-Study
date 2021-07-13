// Given a string s, return the longest palindromic substring in s.
// 가장 긴 팰린드롬을 찾아라.

// 길이를 고정하고 한칸씩 이동하면서 확인
// 길이를 점점 줄여나간다.
const longestPalindrome = function (s) {
  function isPal(i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }

  let n = s.length;
  for (let k = 0; k < n; k++) {
    let i = 0;
    let j = n - 1 - k;
    while (j < n) {
      if (isPal(i, j)) {
        return s.substring(i, j + 1);
      }
      i++;
      j++;
    }
  }
  return s;
};

console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("ac")); // "a"

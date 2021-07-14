/* LeetCode - 680. Valid Palindrome II */

var validPalindrome = function (s) {
  if (isPalindrome(s)) return true;

  let [left, right] = [0, s.length - 1];
  while (left < right) {
    if (s[left] !== s[right]) {
      if (
        isPalindrome(s.substring(left, right)) ||
        isPalindrome(s.substring(left + 1, right + 1))
      )
        return true;
      else return false;
    }
    left++;
    right--;
  }

  function isPalindrome(str) {
    let [left, right] = [0, str.length - 1];
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }
};

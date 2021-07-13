// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

const isPalindrome = function (s) {
  let str = s.replace(/[^a-z0-9]/gi, "");

  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true;
console.log(isPalindrome("race a car")); // false;
console.log(isPalindrome("0P")); // false;

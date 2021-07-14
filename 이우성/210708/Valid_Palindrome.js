// 리트코드 - 유효한 팰린드롬
// https://leetcode.com/problems/valid-palindrome

const isPalindrome = function (s) {
  if (s.length === 1) return true;
  let palindrome = "";
  let alpa = "abcdefghijklmnopqrstuvwxyz0123456789";
  let other = "";

  for (let i = 0; i < s.length; i++) {
    if (alpa.includes(s[i].toLowerCase())) {
      palindrome += s[i].toLowerCase();
    }
  }

  let isCheck = true;
  console.log(palindrome);
  console.log(other);
  for (let [i, range] = [0, parseInt(palindrome.length / 2)]; i < range; i++) {
    if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
      isCheck = false;
    }
  }

  return isCheck;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("0P")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome(".")); // true
console.log(isPalindrome("a")); // true

// 초반 실수 -> 문자열이 1개 일때 체크 안함, 그리고 숫자형태인 문자열 처리를 확인 못했음

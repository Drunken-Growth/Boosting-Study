// 리트코드 - Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring

const longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > 0; j--) {
      let str = s.slice(i, i + j);
      console.log(str);
      if (isPalindrome(str) && answer.length < str.length) {
        answer = str;
      }
    }
  }

  return answer;
};

const isPalindrome = function (str) {
  let isCheck = true;

  for (let i = 0; i < parseInt(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isCheck = false;
    }
  }

  return isCheck;

  //   let n = s.length;
  //   let answer = '';
  //   let dp = Array.from({length: n}).map(v => [false]);

  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < i + 1; j++) {
  //       if (s[j] === s[i]) {
  //         l = i - j + 1;
  //         console.log(s[i], s[j], i, j, l, answer);
  //         dp[j][i] = l < 3 || dp[j + 1][i - 1];

  //         if (l > answer.length && dp[j][i]) {
  //           answer = s.slice(j, i + 1)
  //         }
  //       }
  //     }
  //   }
  // console.log(dp);
  // return answer;
};

console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("ac")); // "a"
console.log(longestPalindrome("bac")); // "b"
console.log(longestPalindrome("bb")); // "bb"
console.log(longestPalindrome("abb")); // "bb"
console.log(longestPalindrome("lcnvoknqgejxbfhijmxgl")); // "l"

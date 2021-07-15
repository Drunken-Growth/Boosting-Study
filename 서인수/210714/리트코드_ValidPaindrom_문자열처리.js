// 문제이해
// 최대 한 글자를 제거하였을 때, 펠린드롬 여부를 리턴

// 2차접근
// 모든 글자를 빼면서 확인하는 것이 아니라, 펠린드롬이 깨지는 시점의 2개의 글자에 대해서만 글자를 빼고난 뒤의 펠린드롬여부를 확인한다.

// 왼쪽글자 !== 오른쪽글자일떄.
// 왼쪽글자를 제외하고 펠린드롬을 확인하고,오른쪽글자 하나를 제외하고 펠린드롬 을 확인한다.
// 둘 중 하나라도 펠린드롬 성립되면 true리턴, 둘 다 false라면 false리턴
var validPalindrome = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let right = s.length - 1 - i;
    if (s[i] !== s[right]) {
      return isP(s.slice(i + 1, right + 1)) || isP(s.slice(i, right));
    }
  }
  return true;

  function isP(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
};

// 1차접근
// 펠린드롬을 확인하는 함수를 만드록, s를 순회하며 한글자 씩 뺐을때의 펠린드롬을 확인하는 방법

// 1차 풀이
// 정확성ok , O(N^2)으로 시간초과
var validPalindrome = function (s) {
  if (isP(s)) return true;
  for (let i = 0; i < s.length; i++) {
    let str = s.slice(0, i) + s.slice(i + 1);
    if (isP(str)) return true;
  }
  return false;

  function isP(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
};

console.log(validPalindrome("abc")); //false
console.log(validPalindrome("tebbem")); // false
console.log(validPalindrome("aaa")); //true
console.log(validPalindrome("abccdba")); //true
console.log(validPalindrome("abccba")); // true

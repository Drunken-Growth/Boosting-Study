// https://leetcode.com/problems/valid-palindrome-ii/
// 투 포인터
var validPalindrome = function (s) {
    let left = 0; 
    let right = s.length - 1;
    let result = true;
    while (left < right) {
        if (s[left] !== s[right]) {
            // 둘 중 하나라도 팰린드롬이면 성립한다.
            return isValid(s, left + 1, right) || isValid(s, left, right - 1);;
        }
        left += 1;
        right -= 1;
    }
    return result;
};

const isValid = (s, left, right) => {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left += 1;
        right -= 1;
    }
    return true;
}
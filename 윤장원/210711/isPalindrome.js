// String 문자열
// leetcode 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

// 풀이 1
var isPalindrome = function(s) {
    const str = s.replace(/[^\w]|_/g, '').toLowerCase();
    const strReverse = str.split('').reverse().join('');
    return str === strReverse ? true : false;
};

// 풀이 2
var isPalindrome = function (s) {
    let str = s.toLowerCase().replace(/[^a-z|0-9]/g,'').split('');
    let mid = Math.floor(str.length / 2);
    for(let i = 0; i < mid; i++) {
        if(str.shift() !== str.pop()) return false;
    }
    return true;
};
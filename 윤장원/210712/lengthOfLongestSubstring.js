// leetcode 3. Longest Substring Without Repeating Characters [주혜님 픽]
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function (s) {
    const hash = new Map();
    let start = 0;
    let max = 0;
    
    for (let i = 0; i < s.length; i++) {
        // 이미 있는 경우 start를 바꿔준다.
        if (hash.has(s[i]) && start <= hash.get(s[i])) {
            start = hash.get(s[i]) + 1;
        } else {
            // 해시에 없는 경우 문자열의 길이를 max와 비교해서 갱신해준다.
            max = Math.max(max, i - start + 1);
        }
        
        // key에 문자열 val인덱스 넣기 
        hash.set(s[i], i);
    }
    return max;
};
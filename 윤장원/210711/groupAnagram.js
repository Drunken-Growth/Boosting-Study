// String
// leetcode 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/
var groupAnagrams = function (strs) {
    const hash = {};
    for (const x of strs) {
        const target = x.split('').sort();
        !hash[target] ? hash[target] = [x] : hash[target].push(x);
    }
    return Object.values(hash);
};
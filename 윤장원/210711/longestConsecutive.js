// leetcode 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/
var longestConsecutive = function (nums) {
    if(!nums || nums.length === 0) return 0;
    const set = new Set(nums);
    let result = 0;
    for (const x of set) {
        if(set.has(x - 1)) continue;
        let curr = x;
        let curMax = 1;
        while (set.has(curr + 1)) {
            curr++;
            curMax++;
        }
        result = Math.max(result, curMax);
    }
    return result;
};
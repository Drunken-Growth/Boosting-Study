// leetcode 40. Combination Sum II
// https://leetcode.com/problems/combination-sum-ii/
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];
    const hash = {};
    const aux = (idx, sum, path = []) => {
        if (sum > target) return;
        if (sum === target) {
            !hash[path] ? hash[path] = 1 : hash[path] += 1;
            return;
        }
        for (let i = idx; i < candidates.length; i++) {
            aux(i + 1, sum + candidates[i], [...path, candidates[i]]);
        }
    }
    
    aux(0, 0);
    
    // filter
    const answer = Object.keys(hash);
    answer.forEach((x) => {
        const arr = x.split(',').map((el) => +el);
        result.push(arr);
    })
    return result;
};
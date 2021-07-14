// leetcode. 39. Combination Sum
// 중복 조합

var combinationSum = function (candidates, target) {
    const result = [];
    
    const aux = (sum, idx, path = []) => {
        if (sum > target) return;
        if (sum === target) result.push(path);
        
        for (let i = idx; i < candidates.length; i++) {
            aux(sum + candidates[i], i, [...path, candidates[i]]);
        }
    }
    aux(0, 0);
    return result;
};
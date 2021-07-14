// leetcode 216. Combination Sum III
// https://leetcode.com/problems/combination-sum-iii/
var combinationSum3 = function (k, n) {
    const result = [];
    const aux = (idx, sum, path = []) => {
        if (sum > n) return;
        if (path.length === k) {
            if (sum === n) result.push(path);
        }
        for (let i = idx; i < 10; i++) {
            aux(i + 1, sum + i, [...path, i]);
        }
    }
    aux(1, 0);
    return result;
};
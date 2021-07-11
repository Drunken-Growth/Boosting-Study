// leetcode 39. Combination Sum
// https://leetcode.com/problems/combination-sum/

var combinationSum = function (candidates, target) {
    let result = [];
    
    const dfs = (sum, index, path=[]) => {
        // sum이 target 이상인 경우 탐색 중지
        if(sum > target) return; 
        if(sum === target) {
            result.push(path);
        }
        
        // 순회
        for(let i=index; i<candidates.length; i++) {
            dfs(sum + candidates[i], i, [...path, candidates[i]]);
        }
    }
    
    dfs(0,0);
    return result;
};
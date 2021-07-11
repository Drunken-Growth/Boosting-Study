// leetcode 46. Permutations
// https://leetcode.com/problems/permutations/
var permute = function (nums) {
    const result = [];
    const n = nums.length;
    const visited = Array.from({ length: n }, () => 0);
    const tmp = Array.from({ length: n }, () => 0);
    
    const aux = (L) => {
        if (L === n) {
            result.push(tmp.slice());
            return;
        } 
        for (let i = 0; i < n; i++) {
            if (visited[i] === 0) {
                visited[i] = 1;
                tmp[L] = nums[i];
                aux(L + 1);
                visited[i] = 0;
            }
        }
    }
    aux(0);
    return result;
};
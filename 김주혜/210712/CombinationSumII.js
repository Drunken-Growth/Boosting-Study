/* 리트코드 - 40. Combination Sum II */

var combinationSum2 = function (candidates, target) {
  let ans = [];
  let hash = {};
  candidates.sort((a, b) => a - b);
  aux([], 0, 0);
  return ans;

  function aux(arr, sum, idx) {
    if (sum >= target) {
      if (sum === target && !hash[String(arr)]) {
        hash[arr] = 1;
        ans.push(arr);
      }
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      aux([...arr, candidates[i]], sum + candidates[i], i + 1);
    }
  }
};

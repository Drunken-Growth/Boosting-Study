/* 리트코드 - 39. Combination Sum */

var combinationSum = function (candidates, target) {
  let ans = [];
  com([], 0, 0);
  return ans;

  function com(arr, sum, idx) {
    if (sum >= target) {
      if (sum === target) ans.push(arr);
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      com([...arr, candidates[i]], sum + candidates[i], i);
    }
  }
};

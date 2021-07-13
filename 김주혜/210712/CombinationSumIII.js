/* 리트코드 - 216. Combination Sum III */

var combinationSum3 = function (k, n) {
  let ans = [];
  aux([], 0, 1);
  return ans;

  function aux(arr, sum, idx) {
    if (sum >= n || arr.length === k) {
      if (sum === n && arr.length === k) ans.push(arr);
      return;
    }
    for (let i = idx; i <= 9; i++) {
      aux([...arr, i], sum + i, i + 1);
    }
  }
};

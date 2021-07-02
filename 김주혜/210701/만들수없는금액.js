// 이코테 - 만들수없는 금액 (그리디)

// ver1 - 조합
function solution(n, nums) {
  let coms = [...nums];
  for (let i = 2; i <= n; i++) {
    makeCom([], 0, i);
  }

  function makeCom(arr, idx, len) {
    if (arr.length === len) {
      coms.push(arr.reduce((p, c) => p + c, 0));
      return;
    }
    for (let i = idx + 1; i <= n; i++) {
      makeCom([...arr, nums[idx]], i, len);
    }
  }
  coms.sort((a, b) => a - b);
  let ans = 0;
  for (let key of coms) {
    if (key - ans > 1) return ans + 1;
    ans = key;
  }
}

// ver2 - 규칙
function solution(n, nums) {
  nums.sort((a, b) => a - b);
  let ans = 1;
  for (let num of nums) {
    if (num > ans) break;
    ans += num;
  }
  return ans;
}

console.log(solution(5, [3, 2, 1, 1, 9])); // 8
console.log(solution(3, [3, 5, 7])); // 1

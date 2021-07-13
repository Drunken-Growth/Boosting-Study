// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.
// You can assume that you can always reach the last index.

// 마지막 인덱스에 도착할 수 있는 최소 카운트
const jump = function (nums) {
  const N = nums.length;
  const arr = Array(N).fill(Number.MAX_SAFE_INTEGER);
  arr[0] = 0;
  for (let i = 0; i < N; i++) {
    const possible_distance = nums[i];
    for (let start = i + 1; start < i + 1 + possible_distance; start++) {
      if (start < N) {
        arr[start] = Math.min(arr[start], arr[i] + 1);
      }
    }
  }
  return arr[arr.length - 1];
};

// 매번 최대 거리를 갱신하고
// 그 거리에 도착했을 때 점프를 추가한다.
const jump2 = function (nums) {
  let jump = 0;
  let cur_idx = 0;
  let max_jump_idx = 0;
  const len = nums.length - 1;

  for (let i = 0; i < len; i++) {
    max_jump_idx = Math.max(max_jump_idx, i + nums[i]);

    if (i === cur_idx) {
      cur_idx = max_jump_idx;
      jump++;
    }
  }
  return jump;
};

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
console.log(jump([1, 2, 1, 1, 1])); // 3

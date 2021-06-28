// Given integer array nums, return the third maximum number in this array.
// If the third maximum does not exist, return the maximum number.

// 정수 배열이 주어질 때, 세번째로 큰 값을 리턴해라
// 세번째로 큰 값이 없을 경우, 최대 값 리턴

// Input: nums = [3,2,1]
// Output: 1

// Input: nums = [1,2]
// Output: 2

// Input: nums = [2,2,3,1]
// Output: 1

// var thirdMax = function (nums) {
//   if (nums.length < 3) return Math.max(...nums);

//   nums.sort((a, b) => b - a);
//   let cur = 1;
//   let value = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     console.log("value :", value, "cur :", cur);
//     if (cur === 3) return value;

//     if (nums[i] < value) {
//       value = nums[i];
//       cur++;
//     }
//   }
//   // console.log(cur);
//   if (cur < 3) {
//     return nums[0];
//   } else if (cur === 3) {
//     return value;
//   }
// };

var thirdMax = function (nums) {
  nums = Array.from(new Set(nums)); // 중복을 제거한 배열
  const len = nums.length;
  if (len <= 2) {
    return Math.max(...nums);
  }
  if (len === 3) {
    return Math.min(...nums);
  }
  nums = nums.sort((a, b) => b - a);
  return nums[2];
};

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([1, 1, 2])); // 2

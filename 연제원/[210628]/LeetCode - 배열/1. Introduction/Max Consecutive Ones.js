// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// 연속된 1의 최대값을 구해라

// Input: nums = [1,1,0,1,1,1]
// Output: 3

// Input: nums = [1,0,1,1,0,1]
// Output: 2

// var findMaxConsecutiveOnes = function (nums) {
//   let answer = 0;
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       count++;
//       if (i === nums.length - 1) {
//         answer = Math.max(answer, count);
//       }
//     } else {
//       answer = Math.max(answer, count);
//       count = 0;
//     }
//   }
//   return answer;
// };

var findMaxConsecutiveOnes = function (nums) {
  const oneCount = nums
    .join("")
    .split("0")
    .map((el) => el.length);
  return Math.max(...oneCount);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2

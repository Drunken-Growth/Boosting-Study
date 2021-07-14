// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages,
// you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates,
// then the first k elements of nums should hold the final result.
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array.
// You must do this by modifying the input array in-place with O(1) extra memory.

// 중복된 값을 전부 제거해라!

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// var removeDuplicates = function (nums) {
//   let cur = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === cur) {
//       nums.splice(i, 1);
//       i--;
//     } else {
//       cur = nums[i];
//     }
//   }
//   // console.log(nums);
//   return nums.length;
// };

var removeDuplicates = function (nums) {
  for (let i = nums.length; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  console.log(nums);
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2])); // 2, nums = [1,2,_]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5, nums = [0,1,2,3,4,_,_,_,_,_]

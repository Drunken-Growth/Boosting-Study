// Given an integer array nums and an integer val,
// remove all occurrences of val in nums in-place.
// The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages,
// you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates,
// then the first k elements of nums should hold the final result.
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array.
// You must do this by modifying the input array in-place with O(1) extra memory.

// 주어진 배열 안에서 삭제해라!

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

// 배열 nums 길이만큼 for문을 돌며 val과 같은 요소가 있을 때, 배열에서 제거한다. (splice를 통해 원본 변경)
// i번째 루프에서 index = i 원소가 사라져, i + 1번째 원소가 앞으로 당겨지므로, splice연산 후에 i 에서 1을 빼준다.
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  // console.log(nums);
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2, nums = [2,2,_,_]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5, nums = [0,1,4,0,3,_,_,_]

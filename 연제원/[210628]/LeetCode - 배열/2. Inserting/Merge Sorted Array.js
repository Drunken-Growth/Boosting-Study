// You are given two integer arrays nums1 and nums2,
// sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function,
// but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n,
// where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// 두 정수 배열이 비내림차순(== 오름차순) 주어질 때, nums1, nums2 의 길이는 각각 m, n
// 두 배열을 비내림차순으로 합친다.
// 리턴되는 값은 없지만 nums1에 합쳐져야 한다.
// nums1의 길이는 m + n인데 0은 무시(nums2의 요소로 대체)

// Input: nums1 = , m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]

var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    // console.log(nums1);
    if (second < 0) {
      break;
    }

    if (nums1[first] > nums2[second]) {
      // console.log("---1---");
      nums1[i] = nums1[first];
      first--;
    } else {
      // console.log("---2---");
      nums1[i] = nums2[second];
      second--;
    }
  }
  console.log(nums1);
};

// var merge = function (nums1, m, nums2, n) {
//   return nums1
//     .filter((el) => el > 0)
//     .concat(nums2)
//     .sort((a, b) => a - b);
// };

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]

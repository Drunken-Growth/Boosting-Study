// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

const maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let max = Number.MIN_SAFE_INTEGER;

  while (start < end) {
    const min_h = Math.min(height[start], height[end]);
    max = Math.max(max, min_h * (end - start));
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16

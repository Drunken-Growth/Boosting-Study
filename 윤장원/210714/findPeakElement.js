// 풀이 1
// 중간에 가지치기로 시간복잡도 O(N) 미만 예상
var findPeakElement = function (nums) {
    nums.unshift(-Infinity);
    nums.push(-Infinity);
    
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i + 1] < nums[i]) {
            return i - 1;
        }
    }
};

// 풀이 2
// 이분 탐색
var findPeakElement = function(nums) {
    let left = 0; 
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = ~~((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) right = mid;
        else left = mid + 1;
    }
    return left;
};

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// leetcode 121. Best Time to Buy and Sell Stock
// 카데인 알고리즘
var maxProfit = function (prices) {
    let min = Infinity;
    let max = 0;
    for (const x of prices) {
        if (x < min) min = x;
        max = Math.max(max, x - min);
    }
    return max;
};
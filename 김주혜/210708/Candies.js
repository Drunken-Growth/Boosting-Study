/* 해커랭크 - Candies */

function candies(n, arr) {
  let candy = Array(n).fill(1);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) candy[i] = candy[i - 1] + 1;
  }
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] > arr[i] && candy[i - 1] <= candy[i])
      candy[i - 1] = candy[i] + 1;
  }
  return candy.reduce((c, p) => c + p, 0);
}

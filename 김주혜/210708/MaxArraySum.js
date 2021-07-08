/* 해커랭크 - Max Array Sum (DP) 
  전전전, 전전, 나, 전전전 + 나, 전전 + 나  => 중에서 제일큰걸로 갱신
*/

function maxSubsetSum(arr) {
  arr[2] = Math.max(arr[0], arr[2] + arr[0], arr[2]);
  for (let i = 3; i < arr.length; i++) {
    arr[i] = Math.max(
      arr[i - 3],
      arr[i - 2],
      arr[i],
      arr[i - 3] + arr[i],
      arr[i - 2] + arr[i]
    );
  }
  return Math.max(...arr);
}

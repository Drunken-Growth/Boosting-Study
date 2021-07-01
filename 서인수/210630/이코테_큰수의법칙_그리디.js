function solution(rules, nums) {
  let sum = 0;
  let [N, M, K] = rules;
  nums.sort((a, b) => b - a);
  let [first, second] = nums;

  while (true) {
    if (M === 0) break;
    for (let i = 0; i < K; i++) {
      sum += first;
      M--;
      if (M === 0) break;
    }
    sum += second;
    M--;
  }

  console.log(sum);
  return sum;
}

// function solution(rules, nums) {
//   let sum = 0;
//   let [N, M, K] = rules;
//   nums.sort((a, b) => b - a);
//   let [first, second] = nums;

//   let secondQty = Math.floor(M / (K + 1));
//   let firstQty = M - secondQty;
//   sum = firstQty * first + secondQty * second;
//   console.log(sum);
// }

solution([5, 8, 3], [2, 4, 5, 4, 6]);

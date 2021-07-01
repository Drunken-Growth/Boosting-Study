/* 이코테 - 곱하기 혹은 더하기 (그리디) */

function solution(input) {
  let max = 0;
  let nums = input.split("").map((el) => Number(el));
  calc(1, nums[0]);
  function calc(step, output) {
    if (step === input.length) {
      max = Math.max(max, output);
      return;
    }
    calc(step + 1, output + nums[step]);
    calc(step + 1, output * nums[step]);
  }
  return max;
}

console.log(solution("02984")); // 576
console.log(solution("567")); // 210

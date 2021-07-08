/* 리트코드 - 739. Daily Temperatures  */

var dailyTemperatures = function (temp) {
  let days = Array(temp.length).fill(0);
  let stack = [0];
  for (let i = 1; i < temp.length; i++) {
    while (stack.length && temp[stack[stack.length - 1]] < temp[i]) {
      let last = stack.pop();
      days[last] = i - last;
    }
    stack.push(i);
  }
  return days;
};

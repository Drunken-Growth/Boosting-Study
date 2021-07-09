/* 리트코드 - 134. Gas Station  */

var canCompleteCircuit = function (gas, cost) {
  const sum = (arr) => arr.reduce((p, c) => p + c, 0);
  if (sum(gas) < sum(cost)) return -1;

  let [remain, start] = [0, 0];
  for (let i = 0; i < gas.length; i++) {
    remain += gas[i] - cost[i];
    if (remain < 0) [start, remain] = [i + 1, 0];
  }
  return start;
};

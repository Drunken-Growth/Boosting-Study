/* LeetCode - 763. Partition Labels */

var partitionLabels = function (s) {
  let ans = [];
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  let i = 0;
  let [start, end] = [0, 0];
  while (i < s.length) {
    end = Math.max(end, map.get(s[i]));
    if (i === end) {
      ans.push(end - start + 1);
      start = i + 1;
    }
    i++;
  }
  return ans;
};

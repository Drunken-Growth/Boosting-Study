/* 리트코드 - 621. Task Scheduler */

var leastInterval = function (tasks, n) {
  let task = makeArr();
  let total = tasks.length;
  while (task.length) {
    task.sort((a, b) => b[1] - a[1]);
    let [i, cnt] = [0, 0];
    while (cnt <= n) {
      if (task[i]) {
        task[i][1]--;
        if (task[i][1] === 0) {
          task.splice(i, 1);
          i--;
        }
        if (!task.length) return total;
      } else total++;
      i++;
      cnt++;
    }
  }
  return total;

  function makeArr() {
    let obj = {};
    tasks.forEach((t) => {
      obj[t] ? obj[t]++ : (obj[t] = 1);
    });
    let arr = [];
    for (let key in obj) {
      arr.push([key, obj[key]]);
    }
    return arr.sort((a, b) => b[1] - a[1]);
  }
};

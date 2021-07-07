/*  해커랭크 - Matrix (그래프) 
  - 일부 테케 시간초과 -> 다시풀기
*/

function minTime(n, roads, machines) {
  let totalTime = roads.reduce((prev, cur) => prev + cur[2], 0);
  roads.sort((a, b) => b[2] - a[2]); // sort by cost
  let root = Array(n).fill(-1);
  machines.forEach((m) => (root[m] = m));

  for (let i = 0; i < roads.length; i++) {
    let [city1, city2, time] = roads[i];
    if (!(machines.includes(root[city1]) && machines.includes(root[city2]))) {
      totalTime -= time;
      if (machines.includes(root[city1])) {
        if (root[city2] >= 0) {
          for (let j = 0; j < root.length; j++) {
            if (j !== city2 && root[j] === root[city2]) root[j] = root[city1];
          }
        }
        root[city2] = root[city1];
      } else if (machines.includes(root[city2])) {
        if (root[city1] >= 0) {
          for (let j = 0; j < root.length; j++) {
            if (j !== city1 && root[j] === root[city1]) root[j] = root[city2];
          }
        }
        root[city1] = root[city2];
      } else {
        if (root[city1] >= 0) {
          for (let j = 0; j < root.length; j++) {
            if (root[j] === root[city1]) root[j] = root[city1];
          }
        } else if (root[city2] >= 0) {
          for (let j = 0; j < root.length; j++) {
            if (root[j] === root[city2]) root[j] = root[city1];
          }
        } else {
          root[city1] = city1;
          root[city2] = city1;
        }
      }
    }
  }
  return totalTime;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  let roads = Array(n - 1);

  for (let i = 0; i < n - 1; i++) {
    let line = readLine();
    if (line.indexOf("green") != -1) {
      i--;
      continue;
    }
    roads[i] = line.split(" ").map((roadsTemp) => parseInt(roadsTemp, 10));
  }

  let machines = [];

  for (let i = 0; i < k; i++) {
    const machinesItem = parseInt(readLine(), 10);
    machines.push(machinesItem);
  }

  const result = minTime(n, roads, machines);

  ws.write(result + "\n");

  ws.end();
}

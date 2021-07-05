/* 프로그래머스 - 다리를 지나는 트럭 (큐) */

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let totalWeight = 0;
  let bridge = Array(bridge_length).fill(0);
  while (true) {
    time++;
    let out = bridge.shift();
    if (out > 0) {
      totalWeight -= out;
      if (truck_weights.length === 0 && !bridge.filter((el) => el).length)
        break;
    }

    let next = truck_weights[0];
    if (totalWeight + next <= weight) {
      bridge.push(truck_weights.shift());
      totalWeight += next;
    } else bridge.push(0);
  }
  return time;
}

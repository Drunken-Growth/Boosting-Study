function solution(n, k, cmd) {
  let arr = Array(n)
    .fill(0)
    .map((_, i) => i);
  let trash = [];
  let ptr = k;
  for (let i = 0; i < cmd.length; i++) {
    let [com, num] = cmd[i].split(" ");
    if (num !== undefined) num = Number(num);

    if (com === "U") {
      let [cnt, move] = [0, ptr];
      while (cnt < num && move > 0) {
        move--;
        if (arr[move] !== undefined && arr[move] !== "X") cnt++;
      }
      if (cnt !== 0) ptr = move;
    } else if (com === "D") {
      let [cnt, move] = [0, ptr];
      while (cnt < num && move < n) {
        move++;
        if (arr[move] !== undefined && arr[move] !== "X") cnt++;
      }
      if (cnt !== 0) ptr = move;
    } else if (com === "C") {
      trash.push(arr[ptr]);
      arr[ptr] = "X";
      let [cnt, move] = [0, ptr + 1];
      while (move < n) {
        if (arr[move] !== undefined && arr[move] !== "X") {
          cnt++;
          break;
        }
        move++;
      }
      if (cnt === 0) {
        move = ptr - 1;
        while (move > 0) {
          if (arr[move] !== undefined && arr[move] !== "X") {
            cnt++;
            break;
          }
          move--;
        }
      }
      if (cnt > 0) ptr = move;
    } else if (com === "Z") {
      let cur = trash.pop();
      arr[cur] = cur;
    }
  }
  return arr.map((s) => (s !== "X" ? "O" : "X")).join("");
}

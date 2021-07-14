function solution(s) {
  let min = s.length;
  for (let i = 1; i <= parseInt(s.length / 2) + 1; i++) {
    // i = 압축 단위
    let full = s;
    let j = 0; // j = 압축대상 포인터
    while (full[j]) {
      let cnt = 1;
      let str = full.substr(j, i);
      let k = j + i; // k = 비교대상 포인터
      while (full[k]) {
        let sub = full.substr(k, i);
        if (str === sub) {
          cnt++;
          k += i;
        } else break;
      }
      if (cnt > 1) {
        full = full.substr(0, j) + cnt + str + full.substr(j + cnt * i);
        j += i + cnt.toString().length;
      } else j += i;
      min = Math.min(min, full.length);
    }
  }
  return min;
}

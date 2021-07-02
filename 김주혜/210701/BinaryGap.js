// 코딜리티 Lesson1 - BinaryGap

function solution(N) {
  let gaps = [];
  bin = N.toString(2);
  let toggle = false;
  let cnt = 0;
  for (let i = 0; i < bin.length; i++) {
    toggle = bin[i] == 0 ? true : false;
    if (toggle) cnt++;
    else {
      if (cnt > 0) gaps.push(cnt);
      cnt = 0;
    }
  }
  return gaps.length === 0 ? 0 : Math.max(...gaps);
}

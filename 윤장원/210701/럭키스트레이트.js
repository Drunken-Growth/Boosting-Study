function solution (input) {
  const mid = String(input).length / 2;
  const left = String(input).slice(0, mid).split('').reduce((acc, val) => acc + (+val),0);
  const right = String(input).slice(mid).split('').reduce((acc, val) => acc + (+val),0);

  if (left === right) return 'LUCKY';
  else return 'READY'
}

const input1 = 123402;
const input2 = 7755;

solution(input1);
solution(input2);

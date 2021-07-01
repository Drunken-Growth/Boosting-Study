function solution (s) {
  let str = s.replace(/[^A-Z]/gi, '');
  let sum = s.replace(/[A-Z]/gi, '').split('').reduce((acc, val) => acc + Number(val), 0);
  let result = '';
  result += str.split('').sort().join('') + (sum + '');
  return result;
}

let str = 'K1KA5CB7';
let str1 = 'AJKDLSI412K4JSJ9D'

solution(str); // 'K1KA5CB7'
solution(str1); // ADDIJJJKKLSS20
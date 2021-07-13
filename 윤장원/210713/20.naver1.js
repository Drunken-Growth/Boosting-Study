function solution(m, k) {
  let idx = 0;
  let result = '';
  for (let i = 0; i < m.length; i++) {
    if (m[i] !== k[idx]) result += m[i];
    else idx += 1;
  }
  return result;
}



let m = "kkaxbycyz";
let k = "abc"; 

let m1 = 'acbbcdc';
let k1 = 'abc';

console.log(solution(m, k)) // "kkxyyz"
console.log(solution(m1, k1)) // "cbdc"
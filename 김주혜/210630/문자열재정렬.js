// 이코테 - 문자열 재정렬 (구현)

function solution(input) {
  let arr = input.split("");
  let alph = [];
  let sum = 0;
  arr.forEach((s) => {
    if (s.match(/[a-zA-Z]/gi)) alph.push(s);
    else sum += Number(s);
  });
  return alph.sort().join("") + sum;
}

console.log(solution("K1kA5CB7")); // ABCKK13

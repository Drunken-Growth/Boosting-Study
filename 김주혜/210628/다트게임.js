// 프로그래머스 다트게임

function solution(dartResult) {
  let results = [];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const bonus = { S: 1, D: 2, T: 3 };

  let i = 0;
  while (i < dartResult.length) {
    let value = dartResult[i];
    let last = results.length - 1;
    if (numbers.includes(value)) {
      if (value === "1" && dartResult[i + 1] === "0") {
        results.push(10);
        i++;
      } else results.push(Number(value));
    } else if (Object.keys(bonus).includes(value)) {
      results[last] = Math.pow(results[last], bonus[value]);
    } else if (["*", "#"].includes(value)) {
      if (value === "*") {
        results[last] *= 2;
        if (results[last - 1]) results[last - 1] *= 2;
      } else results[last] *= -1;
    }
    i++;
  }
  return results.reduce((sum, res) => sum + res, 0);
}

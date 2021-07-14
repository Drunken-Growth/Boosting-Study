/* 캐릭터 생성 */

function solution(n, record) {
  let server = {};
  for (let i = 1; i <= n; i++) server[i] = [];

  for (let i = 0; i < record.length; i++) {
    let [num, id] = record[i].split(" ");
    if (!server[num].includes(id)) {
      if (server[num].length === 5) server[num].shift();
      server[num].push(id);
    }
  }
  const ans = [];
  for (let num in server) ans.push(...server[num]);
  return ans;
}

console.log(
  solution(1, [
    "1 fracta",
    "1 sina",
    "1 hana",
    "1 robel",
    "1 abc",
    "1 sina",
    "1 lynn",
  ])
);

console.log(
  solution(4, [
    "1 a",
    "1 b",
    "1 abc",
    "3 b",
    "3 a",
    "1 abcd",
    "1 abc",
    "1 aaa",
    "1 a",
    "1 z",
    "1 q",
    "3 k",
    "3 q",
    "3 z",
    "3 m",
    "3 b",
  ])
);

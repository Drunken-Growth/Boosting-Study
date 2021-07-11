/* 프로그래머스 - 압축(문자열/구현) */

function solution(msg) {
  let i = 0;
  const dict = makeHash();
  const ans = [];
  let dictNum = 27;
  while (i < msg.length) {
    let j = 1;
    while (i + j <= msg.length && dict[msg.substring(i, i + j)] !== undefined) {
      j++;
    }
    ans.push(dict[msg.substring(i, i + j - 1)]);
    dict[msg.substring(i, i + j)] = dictNum;
    dictNum++;
    if (j > 1) i += j - 1;
    else i++;
  }
  return ans;

  function makeHash() {
    let hash = {};
    for (let i = 65; i < 65 + 26; i++) {
      hash[String.fromCharCode(i)] = i - 64;
    }
    return hash;
  }
}

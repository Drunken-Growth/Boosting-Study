// 포인트는 문자열 연속 시 어떻게 구분하느냐

// curStr = '' 관리하여, curStr가 표에 존재하면 해당 숫자 입력하고 curStr은 리셋

function solution(s) {
  let strToNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let result = "";
  let curStr = "";
  for (let i = 0; i < s.length; i++) {
    // 숫자이면
    if (!isNaN(s[i])) {
      result += s[i];
      continue;
    }
    // 아니면(문자이면)
    // 현재문자열에 추가 후 strToNum에 있나 확인
    curStr += s[i];
    if (strToNum[curStr]) {
      result += strToNum[curStr];
      curStr = "";
    }
  }
  return Number(result);
}

// 문제 이해
// s는 영어와 숫자가 섞여있는 문자열이다. "one4seveneight" 문자로된 영어를 숫자로 바꾸어 원래숫자(1478)를 리턴

// 문제포인트
// 문자열 연속 시 어떻게 구분하느냐 (seven eight)을 구분하는 것
// curStr = '' 관리하여, curStr가 표에 존재할 때(구분), 해당 숫자 입력하고 curStr은 리셋

function solution(s) {
  let strToNum = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
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
      //* strToNum에서 숫자 0이 리턴될 경우 false처리되어 if문 실행안하므로, 문자열값을 리턴하도록한다.
      result += strToNum[curStr];
      curStr = "";
    }
  }
  return Number(result);
}

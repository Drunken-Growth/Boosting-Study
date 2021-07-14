// 접근
// '스택': 브라켓들을 스택에 담고 꺼내면서 계산 O(N)

// 1. 브라켓들을 순회한다.
//  1.1 오픈브라켓이면 스택에 담는다.
//  1.2 클로즈브라켓이면 스택의 마지막 값을 뽑아서 둘이 세트인지 비교한다.
//      이때 세트가 아니면 0 리턴
// 2. 순회이후 STACK의 길이가 0이라면 모두 제거된 것이므로 1 아니면 남아있으므로 0 리턴

function solution(S) {
  let STACK = [];
  let BRACKET = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < S.length; i++) {
    let b = S[i];

    if (b === "(" || b === "{" || b === "[") {
      STACK.push(b);
    } else {
      let pop = STACK.pop();
      if (pop !== BRACKET[b]) return 0;
    }
  }
  return STACK.length === 0 ? 1 : 0;
}

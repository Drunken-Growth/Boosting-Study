// 1차풀이 결과, 입력값을 배열로 전환하는 부분 실수 (한자리 요소 갖는 테케만 통과)
// {{20, 111}, {111}} => [[2,0,1,1,1], [1,1,1]]로 되어버리는 오류

//1차 풀이
function solution(s) {
  //풀이방법
  // 1) 문자열s를 우선 계산이 편하도록 배열로 전환
  // '{{1, 2, 3}, {2, 1}, {2}}' => [ [1, 2, 3], [2, 1], [2]]

  // 2) 배열로 된 입력 값을 길이의 오름차순으로 정렬
  // [[2], [2, 1], [1, 2, 3]]

  // 3) 처음값이 result의 첫 값이고, 이전요소에 포함되지 않은 새로운 값들이 그 다음요소이다.
  // [2] => [2]
  // [2,1] => 이전요소 [2]의 중복을 빼고 난 [1] push
  // [1,2,3] => 이전요소 [2,1]의 중복을 빼고 난 [3] push
  // 정답 : [2, 1, 3]

  //1) 문자열을 배열로 바꾸기 (여기서 잘못 바꿈)
  let answer = [];
  // length 길이로 sort
  // length가 1인 것 push -> length가 2인 것에서 방금 push한 값 빼고 push 반복
  // let sortA =s.sort((a,b)=> a.length - b.length);
  let string = s.slice(1, s.length - 1);
  let sArr = [];
  let el = [];
  for (let i = 0; i < string.length; i++) {
    if (isNaN(s[i]) === false) {
      el.push(Number(s[i]));
    }
    if (s[i] === "}") {
      sArr.push(el);
      el = [];
    }
  }
  sArr.push(el);

  // 2) 길이의 오름차순으로 배열 정렬
  sArr.sort((a, b) => a.length - b.length);

  // 3) 이전 값과 중복요소 제거 한 유일한 값 push
  let prev = sArr[0];
  answer.push(...prev);
  for (let i = 1; i < sArr.length; i++) {
    let uniq = sArr[i].filter((el) => {
      return !prev.includes(el);
    });
    answer.push(...uniq);
    prev = sArr[i];
  }

  return answer;
}

// 완전 실패...
// 풀이방법 도출 실패
function solution(relation) {
  // 접근
  // 20분간 고민했지만 명확한 해결법 떠오르지 않음
  // 컬럼별로 모아놓은 배열을 만들고, 해당 배열의 중복이 없다면 후보키++
  // (단일 후보키라면 이후 탐색에서 해당배열 제외)
  // 중복이 있다면, 그 다음 배열 가져와 유일성 비교, => 유일한다면 후보키 ++  => 아니라면 다음

  // 후보키들을 따로 모으자.
  // [ [0], [1, 2] ] // 정답은 후보키들의 length

  let key = [];
  let attributes = [];
  relation.map((el, idx) => {
    for (let i = 0; i < el.length; i++) {
      if (!attributes[i]) {
        attributes[i] = [];
      }
      attributes[i].push(el[i]);
    }
  });
  console.log(attributes);
  // 유일한 값 체크
  function checkUniq(arr) {
    let dup = arr.filter((val, idx) => arr.indexOf(val) !== idx);
    return dup.length === 0;
  }

  for (let i = 0; i < attributes.length; i++) {
    if (checkUniq(attributes[i])) {
      key.push(i);
    }
    //중복발생 시 처리 어떻게 해야하는 지모르겠다.
  }

  return key.length;
}

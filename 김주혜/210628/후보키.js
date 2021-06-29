function solution(relation) {
  let answer = [];
  // 모든 조합 만들기
  for (let i = 1; i <= relation[0].length; i++) {
    makeCom([], i);
  }
  return answer.length;

  // 유일성, 최소성 만족하는 조합만 answer에 push
  function makeCom(arr, len) {
    if (arr.length === len) {
      if (isUnique(arr) && isMinimal(arr)) answer.push(arr);
      return;
    }
    if (arr[arr.length - 1] === relation[0].length - 1) return;
    for (let i = arr[arr.length - 1] + 1 || 0; i < relation[0].length; i++) {
      makeCom([...arr, i], len);
    }
  }

  // 최소성 체크
  function isMinimal(arr) {
    if (answer.length === 0) return true;
    for (let i = 0; i < answer.length; i++) {
      let res = false;
      for (let j = 0; j < answer[i].length; j++) {
        if (!arr.includes(answer[i][j])) res = true;
      }
      if (!res) return false;
    }
    return true;
  }

  // 유일성 체크
  function isUnique(arr) {
    const map = new Map();
    for (let i = 0; i < relation.length; i++) {
      let key = "";
      for (let j = 0; j < arr.length; j++) {
        key += relation[i][arr[j]];
      }
      if (map.get(key)) return false;
      else map.set(key, 1);
    }
    return true;
  }
}

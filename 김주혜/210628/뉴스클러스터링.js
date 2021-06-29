// 프로그래머스 뉴스클러스터링

function solution(str1, str2) {
  let map = new Map();
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // 0번째 원소로 개수 세팅
  for (let i = 0; i < str1.length - 1; i++) {
    let str = str1[i] + str1[i + 1];
    let prev = map.get(str);
    if (!str.match(/[A-Za-z]{2}/)) continue;
    if (!prev) map.set(str, [1, 0]);
    else map.set(str, [prev[0] + 1, 0]);
  }

  // 1번째 원소로 개수 세팅
  for (let i = 0; i < str2.length - 1; i++) {
    let str = str2[i] + str2[i + 1];
    let prev = map.get(str);
    if (!str.match(/[A-Za-z]{2}/)) continue;
    if (!prev) map.set(str, [0, 1]);
    else map.set(str, [prev[0], prev[1] + 1]);
  }

  let inter = 0; // 교집합 수
  let union = 0; // 합집합 수
  for (let val of map.values()) {
    if (val[0] !== 0 && val[1] !== 0) {
      inter += Math.min(val[0], val[1]);
    }
    union += Math.max(val[0], val[1]);
  }

  // 자카드 유사도 리턴
  if (inter === union) return 1 * 65536;
  return parseInt((inter / union) * 65536);
}

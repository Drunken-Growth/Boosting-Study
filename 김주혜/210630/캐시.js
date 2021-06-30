/* 프로그래머스 - 캐시
    1. cities를 순회 (순회대상 = city)
    2. cache에 있는지 확인 (addTime 함수)
        - hitIdx : 캐시에서 찾은 위치 index
      2-1. 있으면(hitIdx>0) 
            1) 총시간 + 5 
            2) 캐시에서 그 값을 최근값으로 갱신
      2-2. 없으면(else)
            1) 총시간 + 1
            2) 캐시에서 하나 빼고, 하나 넣기
    3. 총시간 리턴
*/

function solution(cacheSize, cities) {
  let cache = [];
  let totalTime = 0;

  if (cacheSize === 0) return 5 * cities.length;
  for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toLowerCase();
    let [hitIdx, time] = addTime(cache, city);
    totalTime += time;
    if (hitIdx >= 0) {
      cache = [
        ...cache.slice(0, hitIdx),
        ...cache.slice(hitIdx + 1),
        cache[hitIdx],
      ];
    } else {
      if (cache.length >= cacheSize) cache.shift();
      if (cache.length < cacheSize) cache.push(city);
    }
  }
  return totalTime;
}

function addTime(cache, city) {
  for (let i = 0; i < cache.length; i++) {
    if (cache[i] === city) return [i, 1];
  }
  return [-1, 5];
}

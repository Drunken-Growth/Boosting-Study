// 문제 이해
// 캐시크기만큼은 도시를 저장할 수 있고, 캐시에 있을 경우 실행시간 1, 없을경우 5를 추가한다.
// 캐시는 가장 최근입력 도시로 채워진다.

// 접근
// 캐시를 큐로 구현하여, 하나씩 넣어주고, 꽉 찰경우 맨앞 빼고 새로운 것 추가하는 방식으로.

// 풀이방법
// 1. 도시이름을 소문자로 변경
// 2. 캐시 구현하기
// 3. 도시이름 순회하며 실행시간 계산

// + cacheSize 0일때 예외처리
// + cache안에 같은 도시 2개 오지 않도록 처리

function solution(cacheSize, cities) {
  let time = 0;

  let cityList = cities.map((el) => el.toLowerCase());

  let cache = new Array(cacheSize).fill(0);

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  for (let i = 0; i < cityList.length; i++) {
    // console.log(cache)
    let city = cityList[i];
    if (cache.includes(city)) {
      let idx = cache.indexOf(city);
      cache.splice(idx, 1);
      cache.unshift(city);
      time += 1;
    } else {
      time += 5;
      cache.pop();
      cache.unshift(city);
    }
  }

  return time;
}

// 풀이 1

function solution(cacheSize, cities) {
    // 캐시 사이즈가 0인 경우 -> 예외 처리
    if (cacheSize === 0) return cities.length * 5;

    // 캐시를 배열로 만들어 주기
    let arr = Array.from({ length: cacheSize }, () => 0);
    let result = 0;
    
    cities = cities.map((x) => x.toLowerCase());
    
    for (const city of cities) {
        
        // 캐시 히트
        if (arr.includes(city)){
            // 인덱스 추적
            result += 1;
            const idx = arr.indexOf(city);
            // 해당 인덱스에서 제거한후 
            arr.splice(idx, 1);
            
            // 맨 앞으로 삽입해준다.
            arr.unshift(city);
        } else {
            result += 5;
            arr.pop();
            arr.unshift(city);
        }
    }
    return result;
}


// 풀이 2

function solution(cacheSize, cities) {
  let result = 0;
  let cache = Array({ length: cacheSize }, () => 0);
  cities.map((x) => {
    x = x.toLowerCase();
    let pos = -1;
    for(let i = 0; i < cacheSize; i++) if(x === cache[i]) pos = i;
      
    // miss
    if(pos === -1) {
        for(let i = cacheSize - 1; i >= 1; i--) {
            cache[i] = cache[i - 1];
        }
        result += 5;
    }
    // hit
    else {
      for (let i = pos; i >= 1; i--) {
            cache[i] = cache[i - 1];
        }
        result += 1;
    }
    cache[0] = x;
  })
  return result;
}

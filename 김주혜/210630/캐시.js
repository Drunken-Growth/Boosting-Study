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

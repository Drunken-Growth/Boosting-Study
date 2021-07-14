// String
// leetcode 819. Most Common Word
// https://leetcode.com/problems/most-common-word/

// 풀이 1
const mostCommonWord = (paragraph, banned) => {
    const hash = new Map();
    const words = paragraph.toLowerCase().replace(/[^\w]/g, ' ').split(' ').filter((x) => x !== '').filter((x) => !banned.includes(x));
    words.forEach((x) => {
        !hash.has(x) ? hash.set(x, 1) : hash.set(x, hash.get(x) + 1)
    });
    const result = [...hash].sort((a, b) => b[1] - a[1]);
    return result[0][0];
};

// 풀이 2

// split 자체가 정규표현식을 사용하는거다. 
// 그렇기 때문에 split 내부에 정규식 패턴을 삽입하였을때 적용이 된다.
const mostCommonWord = (paragraph, banned) => {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase().split(/\W+/);
  const map = {};
  let answer = {count: 0, word: ''}
  
  for (const w of words) {
    if (!bannedSet.has(w)) {
      if (map[w] == null) map[w] = 0;
      map[w]++;
        
      if(map[w] > answer.count) {
          answer.count = map[w]
          answer.word = w
      }
    }
  }

  return answer.word;
};
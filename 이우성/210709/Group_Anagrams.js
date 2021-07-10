// 리트코드 - Group Anagrams
// https://leetcode.com/problems/group-anagrams/submissions

const groupAnagrams = function (strs) {
  let answer = [];
  let hash = {};

  for (let i = 0; i < strs.length; i++) {
    s = strs[i].split("").sort().join("");
    if (hash[s] === undefined) {
      hash[s] = [strs[i]];
    } else {
      hash[s].push(strs[i]);
    }
  }

  Object.values(hash).forEach((str) => {
    answer.push(str);
  });

  return answer;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]

/*
1. 각 문자열을 정렬해서 같은 문자를 가지고 있는 문자열끼리 묶어준다.
2. 배열 형태로 묶어주고 묶은 배열을 answer에 넣어주고 반환한다.
*/

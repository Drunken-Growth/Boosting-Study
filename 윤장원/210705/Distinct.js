// 해시를 키를 통한 구별되는 key 분류
// 정확성 100% 퍼포먼스 100%
function solution(A) {
    const hash = {};
    for (const x of A) {
        !hash[x] ? hash[x] = 1 : hash[x] += 1;
    }
    return Object.keys(hash).length;
}
// 풀이 1
// 정확성 100%, 퍼포먼스 100%
function solution(A) {
    A.sort((a, b) => a - b);
    // 첫번째 요소가 1이 아닌 경우 perm이 아님
    if (A[0] !== 1) return 0;
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] + 1 !== A[i + 1]) return 0;
    }
    return 1;
}


// A permutation is a sequence containing each element from 1 to N once, and only once.
// codility Lesson 6. Sort
// https://app.codility.com/demo/results/training8P4Z4M-QBF/

// 풀이 1
// 문제의 의도 ? sort를 사용한 풀이
function solution(A) {
    A.sort((a, b) => a - b);
    let result = [];
    for (let i = 0 ; i < A.length; i++) {
        if (A[i] !== A[i + 1]) result.push(A[i]);
    }
    return result.length;
}

// 풀이 2 
// set 자료형 풀이 O(N*log(N)) or O(N)
function solution(A) {
    const hash = new Set();
    A.forEach((x) => hash.add(x));
    return hash.size;
}

// 풀이 3 
// hash를 통한 풀이 O(N*log(N)) or O(N)
function solution(A) {
    const hash = {};
    A.forEach((x) => !hash[x] ? hash[x] = 1 : false);
    return Object.keys(hash).length;
}


// 왜 최악의 시간복잡도가 O(NlogN)이 나올까?
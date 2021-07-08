// 카데인 알고리즘
// 레퍼런스
// https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
// https://sustainable-dev.tistory.com/23

// 풀이 1
function solution(A) {
    let min = A[0];
    const result = [0];
    for (let i = 1; i < A.length; i++) {
        if (A[i] < min) min = A[i];
        const diff = A[i] - min;
        result.push(diff);
    }
    return Math.max(...result);
}

// 풀이 2
// 카데인 알고리즘 
function solution(A) {
    let min = A[0];
    let result = 0;
    for (let i = 1; i < A.length; i++) {
        const cur = A[i] - min;
        if (A[i] < min) min = A[i];
        result = Math.max(result, cur);
    }
    return result > 0 ? result : 0;
}
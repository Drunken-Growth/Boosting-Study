// 풀이 1
// 정확성 100%, 퍼포먼스 100%
function solution(A) {
    // 예외 사항
    if (A.length === 0) return;
    const result = [];
    const less = A.slice().sort((a, b) => a - b);
    const more = A.slice().sort((a, b) => b - a);
    const maxA = more[0] * more[1] * more[2];
    const maxB = less[0] * less[1] * more[0];
    result.push(maxA);
    result.push(maxB);
    return Math.max(...result);
}

// 풀이 2 -> 풀이 1 수정 보완
function solution(A) {
    // 예외 사항
    if (A.length === 0) return;
    const result = [];
    const arr = A.sort((a, b) => b - a);
    const maxA = arr[0] * arr[1] * arr[2];
    const maxB = arr[arr.length - 1] * arr[arr.length - 2] * arr[0];
    result.push(maxA);
    result.push(maxB);
    return Math.max(...result);
}

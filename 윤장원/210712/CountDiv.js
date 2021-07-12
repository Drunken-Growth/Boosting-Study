// codility Lesson 5 prefix 1. CountDiv
// https://app.codility.com/demo/results/training89Y8PS-HRE/
function solution(A, B, K) {
    let result = 0;
    if (A % K === 0) result += 1;
    if (A !== B) {
        const a = ~~(A / K);
        const b = ~~(B / K);
        result += (b - a);
    }
    return result;
}
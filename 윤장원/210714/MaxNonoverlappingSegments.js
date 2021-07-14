// https://app.codility.com/demo/results/trainingMTCBGS-4HY/
function solution(A, B) {
    let len = A.length;
    let cnt = 1;
    let end = B[0];
    if (len < 1) return 0;
    for (let i = 1; i < len; i++) {
        if (A[i] > end) {
            cnt += 1;
            end = B[i];
        }
    }
    return cnt
}
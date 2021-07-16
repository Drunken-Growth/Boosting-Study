// https://app.codility.com/demo/results/trainingETAKQC-AZ7/

function solution(A) {
    const result = A.map((x) => Math.abs(x));
    const hash = {};
    result.forEach((x) => {
        !hash[x] ? hash[x] = 1 : hash[x] += 1;
    })
    return Object.keys(hash).length;
}
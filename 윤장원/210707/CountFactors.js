// 약수 구하기 문제
function solution(N) {
    const result = [];
    for (let i = 1; i <= Math.sqrt(N); i++) {
        if (N % i === 0) result.push(i);
    }

    for (const x of result) {
        if (Math.pow(x, 2) === N) return result.length * 2 - 1;
    }
    return result.length * 2;
}
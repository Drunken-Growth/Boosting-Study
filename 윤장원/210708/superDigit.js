// https://www.hackerrank.com/challenges/recursive-digit-sum/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking
// Recursive Digit Sum
// 히든 테스트케이스 4개 붙통
function superDigit(n, k) {
    let result = '';
    for (let i = 0; i < k; i++) {
        result += n;
    }
    return digitSum(result);
}

const digitSum = (n) => {
    if (n.length === 1) return Number(n);
    else {
        const sum = n.split('').reduce((acc, val) => acc + Number(val), 0);
        return digitSum(String(sum));
    }
}
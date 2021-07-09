// Recursion: Davis' Staircase

// DFS 풀이로 인한 심한 뻘짓
// 점화식 문제였다.

// 풀이 1 recursion 시간 초과
function stepPerms(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 4;
    return stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3);
}

// 풀이 2

function stepPerms(n) {
    const memo = Array.from({ length: n + 1 }, () => 0);
    memo[1] = 1;
    memo[2] = 2;
    memo[3] = 4;
    for (let i = 4; i < n + 1; i++) {
        memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
    }
    return memo[n];
}
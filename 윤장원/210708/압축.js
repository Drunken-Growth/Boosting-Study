// 프로그래머스 카카오 2018 3차 압축
// https://programmers.co.kr/learn/courses/30/lessons/17684
// 풀이 1 해시 
function solution(msg) {
    const hash = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8,
        'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15,
        'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22,
        'W': 23, 'X': 24, 'Y': 25, 'Z': 26
    };
    const result = [];
    let now = '';
    let idx = 26;
    
    for (const m of msg) {
        now += m;
        if (hash[now]) continue;
        else {
            result.push(hash[now.slice(0, -1)]);
            idx += 1;
            hash[now] = idx;
            now = now[now.length - 1];
        }
    }
    
    if (hash[now]) result.push(hash[now]);
    return result;
}

// 풀이 2 해시 간결화

function solution(msg) {
    const hash = {};
    const start = 'A'.charCodeAt();
    for (let i = start; i < start + 26; i++) {
        const alpha = String.fromCharCode(i);
        hash[alpha] = i - start + 1;
    }
    const result = [];
    let now = '';
    let idx = 26;
    for (const m of msg) {
        now += m;
        if(!hash[now] ) {
            result.push(hash[now.slice(0, -1)]);
            idx += 1;
            hash[now] = idx;
            now = now[now.length - 1];
        }
    }
    
    if (hash[now]) result.push(hash[now]);
    return result;
}
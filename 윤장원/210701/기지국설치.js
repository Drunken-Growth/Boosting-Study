// 프로그래머스 https://programmers.co.kr/learn/courses/30/lessons/12979

// 풀이 1
function solution(n, stations, w) {
    let answer = 0;
    const coverage = w * 2 + 1;

    const endPoint = n - stations.reduce((prev, cur) => {
        const appartments = cur - w - 1 - prev;
        answer += appartments > 0 ? Math.floor((appartments - 1) / coverage) + 1 : 0;

        return cur + w;
    }, 0);

    if(endPoint > 0)
        answer += Math.floor((endPoint - 1) / coverage) + 1;

    return answer;
}

// 풀이 2
function solution(n, stations, w) {
    const coverage = w * 2 + 1;
    let result = 0;
    stations = [-w, ...stations, n + 1 + w];
    
    for (let i = 0; i < stations.length; i++) {
        const dist = stations[i + 1] - stations[i] - coverage;
        if (dist > 0) result += Math.ceil(dist / coverage);
    }
    return result;
}
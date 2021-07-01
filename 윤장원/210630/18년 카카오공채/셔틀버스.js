// 풀이 1
function solution(n, t, m, timetable) {
    const timetables = [];
    for (let time of timetable) {
        time = time.split(':').map((x) => +x);
        const [hour, min] = time;
        timetables.push(hour * 60 + min);
    }
    
    timetables.sort((a,b) => a - b);
    let current = 540;
    let candidate = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (timetables && timetables[0] <= current) {
                candidate = timetables.shift() - 1;
            } else {
                candidate = current;
            }
        }
        current += t
    }
    
    let hour = String(parseInt(candidate / 60));
    let min = String(candidate % 60);
    
    if (hour.length === 1) {
        hour = '0' + hour;
    }
    
    if (min.length === 1) {
        min = '0' + min;
    }
    
    return hour + ':' + min;
}


// 풀이 2
function solution(n, t, m, timetable) {
    const getTime = time => (+time.substring(0,2) * 60) + (+time.substring(3));
    
    timetable = timetable.map((x) => x = getTime(x)).sort((a, b) => a - b);
    let current = 540;
    let candidate = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (timetable && timetable[0] <= current) {
                candidate = timetable.shift() - 1;
            } else {
                candidate = current;
            }
        }
        current += t
    }
    
    let hour = String(parseInt(candidate / 60));
    let min = String(candidate % 60);
    
    if (hour.length === 1) {
        hour = '0' + hour;
    }
    
    if (min.length === 1) {
        min = '0' + min;
    }
    
    return hour + ':' + min;
}

/*

    1) n -> 횟수
    2) t -> 분
    3) m -> 최대 사람 승객
    4) 대기시간 - 1
*/
function solution(record) {
    const records = [];
    const hash = new Map();
    const result = [];
    
    // record 데이터 파싱
    for (const r of record) {
        records.push(r.split(' '));
    }
    
    for (const record of records) {
        const attr = record[0];
        const id = record[1];
        const char = record[2];
        
        // 최종적인 아이디만 확인
        if (attr === 'Enter') {
            hash.set(id, char);
        } else if (attr === 'Change') {
            hash.set(id, char);
        }
    }
    
    // 최종적인 로그 확인
    for (const record of records) {
        const attr = record[0];
        const id = record[1];
        const char = record[2];
        
        if (attr === 'Enter') {
            result.push(`${hash.get(id)}님이 들어왔습니다.`);
        } else if (attr === 'Leave') {
            result.push(`${hash.get(id)}님이 나갔습니다.`)
        }
    }
    
    return result;
}
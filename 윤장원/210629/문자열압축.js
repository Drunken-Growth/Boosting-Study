function solution(s) {
    const answer = [];
    
    for (let i = 0; i < s.length; i++) {
        const num = i + 1;
        let cnt = 1;
        let newStr = '';
        for (let j = 0 ; j < s.length; j += num) {
            const curr = s.substring(j, j + num);
            const next = s.substring(j + num, j + num + num);
            
            if (curr === next) cnt += 1;
            else {
                if (cnt === 1) newStr += curr;
                else {
                    newStr += cnt + curr;
                    cnt = 1;
                }
            }
        }
        
        answer.push(newStr.length);
    }
    
    return Math.min(...answer)
}
function solution(s) {
    let arr = s.split('}');
    let parse = [];
    let parse_dot = [];
    let result = [];
    const parse2 = [];
    const hash = {};
    let answer = [];
    
    for (const x of arr) {
        if (x) {
            parse.push(x.replace(/[{}]/gi, ''));
        }
    }
    
    parse.forEach((x) => {
        if (x[0] === ',') x = x.slice(1);
        parse_dot.push(x);
    })
    
    for (const x of parse_dot) {
        parse2.push(x.split(','));
    }
    
    parse2.sort((a, b) => a.length - b.length);
    
    for (const x of parse2) {
        x.forEach((el) => {
            if (hash[el]) hash[el] += 1;
            else hash[el] = 1;
            
            if (hash[el] === 1) result.push(el);
        })
    }
    
    result.forEach((x) => answer.push(+x));
    
    return answer;
}
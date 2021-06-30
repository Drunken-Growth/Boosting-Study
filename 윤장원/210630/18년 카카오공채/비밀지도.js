// 풀이1. 구현 
function solution(n, arr1, arr2) {
    // 0의 개수를 길이만큼 채우고 00000, 뒤에서부터 슬라이스해서 값 채우기, 미리 0을 안채우면, 1001을 처리하기 힘듬
    // 즉 길이만큼 나오지않는 이진수를 처리하기가 힘듬
    arr1 = arr1.map((x, i) => ('0'.repeat(n) + x.toString(2)).slice(-n));
    arr2 = arr2.map((x, i) => ('0'.repeat(n) + x.toString(2)).slice(-n)); 
    const result = [];
    
    for (let i = 0; i < arr1.length; i++) {
        //01001 이진수의 0,1을 숫자로 바꿔주기 -> 1,0을 더해서 2나 1로 만들기 위해
        arr1[i] = arr1[i].split('').map((x) => +x); 
        arr2[i] = arr2[i].split('').map((x) => +x);
        let arr = [];
        
        // 값은 요소를 더한다.
        for (let j = 0; j < arr1.length; j++) {
            arr.push(arr1[i][j] + arr2[i][j])
        }
        
        // 새로운 문자를 만들어 result에 삽입하기 위해서 선언
        let newStr = ''
        
        arr = arr.forEach((x) => {
            if (x === 1 | x === 2) newStr += '#';
            else newStr += ' ';
        })
        result.push(newStr);
    }
    return result;    
}


/*
    1) 비트 연산자풀이
    2) 일반 Or 풀이
*/


// 정규표현식 풀이
function solution(n, arr1, arr2) {
    return arr1
        .map((x,i) => (('0').repeat(n) + (x | arr2[i]).toString(2)).slice(-n))
        .map((x) => x.replace(/0/g, ' ').replace(/1/g, '#'));
    
    // (x | arr2[i]).toString(2) 조건문을 통해 1 or 0이 있는 경우만 더해준다.
}

// 정규 표현식도 체이닝이 가능하다.


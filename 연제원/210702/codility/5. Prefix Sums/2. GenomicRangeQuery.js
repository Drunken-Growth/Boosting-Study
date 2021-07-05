// A DNA sequence can be represented as a string consisting of the letters A, C, G and T,
// which correspond to the types of successive nucleotides in the sequence.
// Each nucleotide has an impact factor, which is an integer.
// Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively.
// You are going to answer several queries of the form:
// What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

// The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters.
// There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers.
// The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides
// contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

// Write a function:
// function solution(S, P, Q);

// that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers,
// returns an array consisting of M integers specifying the consecutive answers to all queries.

// Result array should be returned as an array of integers.

// DNA 서열은 A, C, G, T로 구성된 문자열로 나타낼 수 있다. 이는 뉴클레오티드 유형에 해당한다.
// A, C, G, T는 각각 1, 2, 3, 4 영향 요소를 갖는다.
// 주어진 DNA 서열의 특정 부분에 포함된 뉴클레오티드의 최소 영향 요소는 뭘까?!

// DNA 서열은 N개의 문자를 가진 S 문자열로 주어진다.
// 비어있지 않은 P, Q배열이 M 쿼리로 구성되어 주어지는데, 각각 M개의 정수로 구성되어 있다.
// K번째 쿼리(0<= K < M)는 요구한다 너에게 찾으라고 뉴클레오티드의 최소 영향 계수를,
// P[K], Q[K] 사이에 위치한 DAN 서열안에 포함된
// 뭔소리야...

// 예시
// S = CAGCCTA, P = [2, 5, 0], Q = [4, 5, 6] 일때 [2, 4, 1]을 리턴

// P[0] = 2, Q[4] = 4 => S[2] = G, S[4] = C => DNA 서열에서 각각 3, 2 => 최솟값 2
// P[1] = 5, Q[1] = 5 => S[5] = T, S[5] = T => DNA 서열에서 4
// P[2] = 0, Q[2] = 6 => S[0] = C, S[6] = A => DNA 서열 전체를 포함하니깐 최소는 1?

// 조건
// N is an integer within the range [1..100,000];
// M is an integer within the range [1..50,000];
// each element of arrays P, Q is an integer within the range [0..N − 1];
// P[K] ≤ Q[K], where 0 ≤ K < M;
// string S consists only of upper-case English letters A, C, G, T.

// 문제!
// P[i], Q[i] => 숫자가 나오는데 S[P[i]] ~ S[Q[i]] 중에서 최솟값을 찾아라!
// P[i] <= Q[i]

// 풀이
// 1. P or Q 길이만큼 순환
// 2. 한번 돌 때마다 S 내 범위를 구해야하므로 slice 사용 => range = S.slice(? ~ ?)
// 3. ? = P, Q의 각 요소값 => range = S.slice(P[i] ~ Q[i] + 1) , Q[i]도 포함하므로 + 1
// 4. A, C, G, T 순대로 1, 2, 3, 4를 리턴하면 되니깐 순서대로 조건문을 넣는다.
//   4-1. 있는지 확인하는 건 indexOf 사용해서 -1 만 아니면 있다는 뜻!

function solution(S, P, Q) {
  let answer = [];

  for (let i = 0; i < P.length; i++) {
    const range = S.slice(P[i], Q[i] + 1);

    if (range.indexOf("A") !== -1) {
      answer.push(1);
    } else if (range.indexOf("C") !== -1) {
      answer.push(2);
    } else if (range.indexOf("G") !== -1) {
      answer.push(3);
    } else {
      answer.push(4);
    }
  }

  return answer;
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6])); // [2, 4, 1]

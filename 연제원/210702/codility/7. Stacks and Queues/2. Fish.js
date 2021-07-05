// You are given two non-empty arrays A and B consisting of N integers.
// Arrays A and B represent N voracious fish in a river,
// ordered downstream along the flow of the river.

// The fish are numbered from 0 to N − 1.
// If P and Q are two fish and P < Q, then fish P is initially upstream of fish Q.
// Initially, each fish has a unique position.

// Fish number P is represented by A[P] and B[P].
// Array A contains the sizes of the fish. All its elements are unique.
// Array B contains the directions of the fish. It contains only 0s and/or 1s, where:

// 0 represents a fish flowing upstream,
// 1 represents a fish flowing downstream.
// If two fish move in opposite directions and there are no other (living) fish between them,
// they will eventually meet each other. Then only one fish can stay alive − the larger fish eats the smaller one. More precisely, we say that two fish P and Q meet each other when P < Q, B[P] = 1 and B[Q] = 0, and there are no living fish between them. After they meet:

// If A[P] > A[Q] then P eats Q, and P will still be flowing downstream,
// If A[Q] > A[P] then Q eats P, and Q will still be flowing upstream.
// We assume that all the fish are flowing at the same speed.
// That is, fish moving in the same direction never meet.
// The goal is to calculate the number of fish that will stay alive.

// N개의 정수로 이루어진 A, B 배열이 주어진다. (빈배열 X)
// A, B 배열은 강 흐름을 따라 흐르는 순서의 N 마리의 물고기를 나타낸다.

// 물고기 수는 0 ~ N-1 마리다.
// 물고기 두 마리 P < Q 면, 물고기 P는 물고기 Q의 상위에 있는 처음이다? 유일한 위치를 가진?

// 물고기 넘버 P는 A[P], B[P]를 나타낸다.
// 배열 A는 물고기의 크기들을 포함하고, 각 요소는 유일하다.
// 배열 B는 물고기의 방향을 나타낸다. 0 : 위로, 1 : 아래로

// 두 물고기가 반대로 움직이거나, 두 물고기 사이에 아무것도 없다면. 둘은 결국 서로 만난다.
// 그 때, 한마리 물고기만 남아있을 수 있다. => 큰 물고기는 작은 물고기를 잡아먹는다.
// 정확하게 말하자면, P, Q 물고기가 있을 때, P < Q, B[P] = 1, B[Q] = 0 이고, 사이에 아무 물고기도 없을 때 만난다고 한다.
// 그 후  A[P] > A[Q] 면 P가 Q를 잡아먹고 계속 하류로 흐른다.
// A[Q] > A[P] 면 Q가 P를 잡아먹고 계속 상류로 흐른다.

// 물고기들이 같은 속도로 할 때, 같은 방향이면 평생 만나지 않는다.
// 목표는 전체 살아이있는 물고기 수를 리턴해라!!!

// 예시
// A = [4,3,2,1,5], B = [0,1,0,0,0] 라면
// 처음에 모든 물고기는 살아있고, 1번 물고기를 제외한 모든 물고기는 하류로 흐른다(0)
// 1번 물고기는 2,3 물고기를 모두 잡아먹고 4번 물고기한테 잡혀 먹힘
// 결국 2마리만 남는다.

// 스택을 이용하자!
// idx가 0에 가까울 수록 상류 쪽에 있음
// 앞 , 다음 물고기 방향이 같으면 절대 안만남
// 앞 물고기가 방향이 0(상류 방향)이고 다음 물고기 방향이 1(하류 방향)이면 절대 안만남
// 앞 물고기가 방향이 1이고 다음 물고기 방향이 0이면 만남

// stack에 저장 시 인덱스로 저장

// 풀이
// direction = 0 : 상류 방향
// direction = 1 : 하류 방향
// 1. 현재 물고기가 하류 방향일 땐 일단 stack 에 추가
// 2. 현재 물고기가 상류 방향일 땐
//   2-1. 앞의 물고기가 없거나, 상류 방향일 땐 절대 안 만남 => 그냥 추가
//   2-2. 앞의 물고기가 하류 방향일 땐 만남
//   2-3. 현재 물고기가 잡아 먹히면 다음으로 넘어감
//   2-4. 현재 물고기가 더 클 경우 앞의 물고기를 최대한 잡아먹을 수 있을 때 까지 반복

function solution(A, B) {
  const stack = [];
  const N = A.length;
  let pos = 0;

  while (pos < N) {
    const direction = B[pos];

    // 1
    if (direction === 1) {
      stack.push(pos);
      pos++;
    }
    // 2
    else {
      // 2-1
      if (stack.length === 0 || B[stack[stack.length - 1]] === 0) {
        stack.push(pos);
        pos++;
      }
      // 2-2
      else {
        // 2-3
        if (A[pos] < A[stack[stack.length - 1]]) {
          pos++;
        }
        // 2-4
        else {
          stack.pop();
        }
      }
    }
  }
  return stack.length;
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])); // 2

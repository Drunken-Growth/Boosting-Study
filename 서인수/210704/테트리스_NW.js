// 3번문제 실패!

function solution(block, board) {
  // 보드의 길이 N
  let N = board.length;
  //     let dx = [0, 0, 0]
  //     let dy = [0, 1, 2]
  let result = [];
  let B = board.map((el) => el.slice());
  //     // p : (r,c) , (r,c+1) , (r,c+2)
  //     // b : (r,c) , (r+1, c) , (r+2, c)
  //     // r : (r,c) , (r,c+1), (r+1, c+1)
  //     // y : (r+1, c), (r, c+1), (r+1, c+1)
  //     // g : (r,c), (r+1, c), (r+1), (c+1)
  //     // v : (r,c), (r+1, c), (r, c+1)
  //     let blocks = [ [], [], [], [], [], [] ]
  //     // 6가지 보블록 순회
  //     for(let block = 0; block < 6; block++){

  //         let color =  blocks[block]; // 위치 [ [] [] ] // [ dx = [0,0,0 ] dy [0,1,1] ]

  //         for(let i = 0; i < 3; i++){
  //             let nx =
  //             let ny = 2;

  //             if(B[nx][ny] === 1){
  //                 break
  //             } else {
  //                 B[nx][ny] =1
  //             }
  //         }

  let cnt = 0;
  for (let i = 0; i < N; i++) {
    if (
      B[i].reduce((acc, cur) => acc + cur) === 2 ||
      B[i].reduce((acc, cur) => acc + cur) === 1
    ) {
      cnt++;
    }
  }
  result.push(cnt);

  // }
  //     0. 보드의 모양을 만든다

  //     1. 보드전체순회
  //      보드의 시작지점 (왼쪽상단)을 기준으로 0 이면 보드를 넣는 것을 시작한다.

  //     2. 보드를 두다가 1을 만나면 continue
  //     3. 보드를 다 두었다면
  //     3.-1 해당 보드를 순회하면서 가로의 합이 4인 경우를 세어서 cntArr 에 추가한다.

  return Math.max(result);
}
/*
문제 설명
삼트리스 게임을 하려고 합니다. 삼트리스는 6가지 블록을 차곡차곡 쌓았을 때 가로 방향으로 한 줄을 빈틈없이 채우면 해당 줄이 없어지는 게임입니다.

6가지 블록은 다음과 같습니다(각 블록은 회전이 불가능합니다).

sam_1.png

다음은 초기 게임 화면과 놓아야 할 블록이 주어졌을 때, 각 블록으로 줄을 가장 많이 없애는 예시입니다.

sam_2.png

위 예시와 같이 초기 게임 화면의 상태에 따라서, 블록별로 어느 위치에 놓느냐에 따라 없앨 수 있는 줄의 개수가 달라집니다. 초기 게임 화면과 놓아야 할 블록이 주어졌을 때, 주어진 블록을 이용해서 최대 몇 줄을 없앨 수 있는지 구하려고 합니다.

단, 줄을 없앤 후 남은 블록은 다음과 같이 놓이기 때문에 연속해서 줄이 없어지는 경우는 없습니다.

sam_3.png

초기 게임 화면 board는 2차원 배열로 주어지며, 블록이 놓여있는 자리는 숫자 1, 빈자리는 숫자 0으로 표시합니다.

위의 예시에서는 다음과 같이 표시됩니다.

sam_4.png

즉, board=[[1,0,0,0],[1,0,0,1],[1,1,0,1],[1,1,0,1]]로 표시 됩니다.

현재 놓아야 할 블록의 번호 block과 초기 게임 화면 board가 매개변수로 주어질 때, 현재 게임화면에서 주어진 블록을 놓아 없앨 수 있는 최대 줄의 수를 return 하도록 solution 함수를 완성해주세요. 단, 블록은 게임 화면을 벗어나도록 놓을 수 없으며, 주어진 블록을 놓을 수 없거나, 혹은 어느 자리에 놓더라도 줄을 없앨 수 없는 경우에는 0을 return 해주세요.

제한사항
초기 게임 화면 board는 2차원 배열이며, 0 또는 1로만 이루어져 있습니다.
초기 게임 화면의 가로, 세로 길이는 같고, 3 이상 8 이하의 자연수입니다.
초기 게임 화면에서 가로 방향으로 한 줄 이상이 이미 채워져 있는 경우는 주어지지 않습니다.
block은 놓아야 할 블록의 번호를 나타내며 0부터 5까지의 수로 이루어져 있습니다.
sam_5.png

입출력 예
block	board	result
0	[[1,0,0,0],[1,0,0,1],[1,1,0,1],[1,1,0,1]]	2
입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.
*/

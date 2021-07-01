function solution(m, musicinfos) {
  // 문제이해
  // 1. m과 일치하는 멜로디를 가진 노래 title을 리턴해야한다.
  // 조건 1 ) 글자수를 가지고 멜로디를 만들기 때문에, C#, D#, F# ,... 등은 똑같은 하나의 문자로 취급해주어야한다.
  // 조건 2-1 ) 음악의 각 재생시간을 구한다.
  // 조건 2-2 ) 멜로디는 m의길이와 재생시간를 고려하여, 자르거나 늘려주어야 한다.
  // 조건 3 ) 여러개가 일치할 경우, 재생시간이 긴 것이 우선이다.

  // 풀이방법
  // 1. 조건에 3을 만족하도록 입력값을 파싱한다.
  // 2.
  let musics = musicinfos.map((el) => el.split(","));
  // 조건1.
  // replaceFlat으로 A# 문자를 하나의 소문자 단어로 변경
  // music의 melody에도 replaceFlat적용한다.
  m = replaceFlat(m);
  musics.map((el) => (el[3] = replaceFlat(el[3])));

  // 조건2.
  // 시작시간, 종료시간을 파싱해서, 재생시간을 만들고 music 배열 가장 끝의 요소로 추가한다.
  musics.map((el) => {
    let Time = [];
    for (let i = 0; i < 2; i++) {
      let [hour, min] = el[i].split(":").map((t) => Number(t));
      Time.push(hour * 60 + min);
    }
    let [startTime, endTime] = Time;
    let playTime = endTime - startTime;
    el.push(playTime);
  });

  // 조건 3.
  // playTime 높은 순으로 정렬해주어 만약에 같은 경우 생기더라도 자동으로 우선순위가 높은게 뽑히도록
  musics.sort((a, b) => b[4] - a[4]);

  // 최종 music 파싱결과
  //   console.log(musics);
  // [[ '03:00', '03:30', 'FOO', 'CcB', 30 ],[ '04:00', '04:08', 'BAR', 'CcBCcBCcB', 8 ]]

  // 조건2-2) 1. musics를 순회하며, 멜로디를 재생시간에 맞추어 수정한다.
  for (let i = 0; i < musics.length; i++) {
    let [start, end, title, melody, pTime] = musics[i];

    // 멜로디가 재생시간 보다 길다면, 재생시간만큼만 자른다.
    // 재생시간 보다 짧다면, 재생시간만큼 멜로디를 반복하여 늘려주어야한다.
    if (melody.length > pTime) {
      melody = melody.slice(0, pTime);
    } else {
      // 차이시간/멜로디의 몫만큼 repeat,  나머지만큼 slice해서 더해줌
      let diff = pTime - melody.length;
      let quo = Math.floor(diff / melody.length);
      let rem = diff % melody.length;

      melody += melody.repeat(quo);
      melody += melody.slice(0, rem);
    }
    // 수정된 멜로디로 교체하기
    musics[i][3] = melody;

    // 멜로디가 비교 음악과 일치한다면 해당 제목을 리턴해준다. (우선순위는 위에서 고려했으므로 바로 리턴가능)
    if (melody.includes(m)) return title;
  }

  // 코드 가독성상 아래 위치
  function replaceFlat(str) {
    return str
      .replace(/C#/gi, "c")
      .replace(/D#/gi, "d")
      .replace(/F#/gi, "f")
      .replace(/G#/gi, "g")
      .replace(/A#/gi, "a")
      .replace(/#/gi, "");
  }
  return "(None)";
}
console.log(
  solution(
    "ABCDEFG",
    ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"],
    "HELLO"
  )
); // 'HELLO'

///////////////////////////////////////////
/*

function solution(m, musicinfos) {
    function replaceFlat(str) {
        return str
        .replace(/C#/gi, "c")
        .replace(/D#/gi, "d")
        .replace(/F#/gi, "f")
        .replace(/G#/gi, "g")
        .replace(/A#/gi, "a")
        .replace(/#/gi, "");
    }
    
  m = replaceFlat(m);
  let correct = [];
  let musics = musicinfos.map((el) => el.split(","));

  // 각 음악의 재생시간을 구해서 각각의 music 배열의 끝에 추가해준다. + melody에 replaceFlat적용한다.
  musics.map((el) => {
    let Time = [];
    for (let i = 0; i < 2; i++) {
      let [hour, min] = el[i].split(":").map((t) => Number(t));
      Time.push(hour * 60 + min);
    }
    let playTime = Time[1] - Time[0];
    el.push(playTime);
    // replaceFlat적용
    el[3] = replaceFlat(el[3])
  });
    //  console.log(musics)
    //	[ [ '03:00', '03:30', 'FOO', 'CcB', 30 ],[ '04:00', '04:08', 'BAR', 'CcBCcBCcB', 8 ]]
  

  // 1. 순회하며, 멜로디를 재생된 시간에 맞추어 수정한다.
  for (let i = 0; i < musics.length; i++) {
    let [start, end, title, melody, pTime] = musics[i];
    // 재생시간을 고려한 melody 만들기
    if (melody.length > pTime) {
      melody = melody.slice(0, pTime);
    } else {
      // 재생시간과 음악길이 차이만큼 멜로디를 늘려준다.
      // 차이시간/멜로디의 몫만큼 repeat,  나머지만큼 slice해서 더해줌
      let diff = pTime - melody.length; 
      let quo = Math.floor(diff / melody.length);
      let rem = diff % melody.length;

      melody += melody.repeat(quo);
      melody += melody.slice(0, rem);
    }
    // 멜로디 교체하기
    musics[i][3] = melody;
    if (melody.includes(m)) return title
  }
    

  // for (let i = 0; i < musics.length; i++) {
  //   if (musics[i][3].match(m)) return musics[i][2];
  // }
 

  return '(None)'
}
*/

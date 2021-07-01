function solution(m, musicinfos) {
  m = replaceFlat(m);
  musicinfos = musicinfos.map((v) => v.split(","));

  for (let i = 0; i < musicinfos.length; i++) {
    const [start, end, title, melody] = musicinfos[i];
    const [sH, sM] = start.split(":").map((v) => Number(v));
    const [eH, eM] = end.split(":").map((v) => Number(v));
    const totalMin = (eH - sH) * 60 + (eM - sM);
    musicinfos[i] = [totalMin, title, replaceFlat(melody)];
  }
  // 조건이 일치하면 제일 긴 음악 제목을 반환한다
  musicinfos.sort((a, b) => b[0] - a[0]);

  for (let info = 0; info < musicinfos.length; info++) {
    const [totalMin, title, melody] = musicinfos[info];

    // 기억과 멜로디가 일치하면
    if (factMelody(totalMin, melody).match(m)) {
      return title;
    }
  }
  // 일치하지 않으면
  return "(None)";
}

// 재생시간에 따라 멜로디 만들기
function factMelody(totalMin, melody) {
  const fact = totalMin - melody.length;
  let factMelody = "";

  if (fact > 0) {
    factMelody = melody + melody.repeat(totalMin / melody.length);
  } else {
    factMelody = melody + melody.slice(0, fact);
  }
  factMelody = factMelody.slice(0, totalMin);

  return factMelody;
}

// #음 변환
function replaceFlat(str) {
  return str
    .replace(/C#/gi, "c")
    .replace(/D#/gi, "d")
    .replace(/F#/gi, "f")
    .replace(/G#/gi, "g")
    .replace(/A#/gi, "a")
    .replace(/#/gi, "");
}

/*
#을 제거하는 로직
m.replace(/(\w)#/g, (_, c) => c.toLowerCase());

1. #이 붙은 음은 소문자로 바꿔주는 함수를 만든다.
2. start시간 - end시간 => 음의 길이
3. 뮤직인포의 음과 기억한 멜로디가 맞으면 해당 음의 제목을 반환한다.
4. 주어진 배열 musicinfos의 요소 형태를 변형한다.
  4.1 시간은 세미콜론을 제거하고 넘버로 바꾼다. 그리고 초 단위로 변경한다.
  4.2 제목은 그대로 반환하고, 음은 #을 제거하는 함수에 넣어준다.
  4.3 가장 타임이 긴 기준으로 정렬한다.
  4.4 [[14, HELLO, CDEFGAB], [5, WORLD, ABCDEF]], ABCDEFG 형태로 나온다.
5. 재생시간에 따른 진짜 멜로디를 만들어주는 함수를 구현한다.

*/

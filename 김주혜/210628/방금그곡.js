// 프로그래머스 방금 그 곡

function solution(m, musicinfos) {
  m = replaceFlat(m);
  musicinfos = musicinfos
    .map((info) => info.split(","))
    .map((info) => {
      let [startTime, endTime, title, melody] = info;
      let [sHour, sMin] = startTime.split(":").map((el) => Number(el));
      let [eHour, eMin] = endTime.split(":").map((el) => Number(el));
      let totalMin = (eHour - sHour) * 60 + (eMin - sMin);
      return [totalMin, info[2], replaceFlat(melody)];
    })
    .sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < musicinfos.length; i++) {
    let [totalMin, title, melody] = musicinfos[i];
    if (makeFullMusic(totalMin, melody).match(m)) return title;
  }
  return "(None)";
}

function makeFullMusic(totalMin, melody) {
  let len = melody.length;
  let [val, remain] = [parseInt(totalMin / len), totalMin % len];
  let result = "";
  for (let i = 0; i < val; i++) {
    result += melody;
  }
  return result + melody.substr(0, remain);
}

function replaceFlat(str) {
  return str
    .replace(/C#/gi, "c")
    .replace(/D#/gi, "d")
    .replace(/F#/gi, "f")
    .replace(/G#/gi, "g")
    .replace(/A#/gi, "a")
    .replace(/#/gi, "");
}

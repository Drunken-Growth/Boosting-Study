const alboRemove = (albo) => {
  return albo = albo
    .replace(/C#/gi, "c")
    .replace(/D#/gi, "d")
    .replace(/F#/gi, "f")
    .replace(/G#/gi, "g")
    .replace(/A#/gi, "a");
}

function solution(m, musicinfos) {
  m = alboRemove(m);
  const answer = [];
  for (let musicinfo of musicinfos) {
    musicinfo = musicinfo.split(',');
    let start = musicinfo[0].split(':');
    let end = musicinfo[1].split(':');
    let title = musicinfo[2];
    let albo = alboRemove(musicinfo[3]);
    
    const totalTime = (+end[0] - +start[0]) * 60 + (+end[1] - start[1]);
    
    const res = totalTime % albo.length;
    const div = parseInt(totalTime / albo.length);
        
    if(div > 0) {
        albo = albo.repeat(div).substring(res);
    } else {
        albo = albo.substring(0, res);
    }
    
    // 최대값 갱신
    if (albo.includes(m)) {
        answer.push([title, totalTime]);
    }
  }
  // 노래 길이로 정렬
  answer.sort((a, b) => b[1] - a[1]);
  
  if (answer.length) return answer[0][0];
  else return '(None)';
}

// 1) 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 
// 2) 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
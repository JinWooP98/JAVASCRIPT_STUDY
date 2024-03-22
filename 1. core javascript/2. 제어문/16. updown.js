alert (`UP & DOWN 게임을 시작하겠습니다.`);
while(true) {
  var userchoice = +prompt (`난이도를 선택하세요 :\n1. 상(기회 3번), 2. 중(기회 5번), 3. 하(기회 10번)`);
  var level = userchoice;
  var chance = 0;
  var answer = Math.floor((Math.random() * 100)+1);
  var userAnswer = 0;
  var min = 1, max = 100;

  // 난이도 선택, 기회 횟수 지정
  if (level === 3) {
    alert('하 난이도를 선택하셨습니다. (기회 10번');
    chance = 10;
  } else if (level === 2) {
    alert('중 난이도를 선택하셨습니다. (기회 5번)');
    chance = 5;
  } else if (level === 1) {
    alert('상 난이도를 선택하셨습니다. (기회 3번');
    chance = 3;
  } else {
    level = 1;
    alert('잘못된 답을 입력하셨습니다. 난이도가 상으로 지정됩니다.');
    chance = 3;
  }

  alert(`${min} ~ ${max} 사이의 무작위 숫자를 ${chance}번 안에 맞춰보세요!`)

  while (true) {
    userAnswer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}], 남은 기회 ${chance}번`);
    
    if (userAnswer < min || userAnswer > max){
      continue;
    } else  if (userAnswer === answer) {
      alert(`정답입니다. 정답 : ${answer}`);
      break;
    } else if (userAnswer > answer) {
      chance--;
      if(chance === 0) {
        alert(`기회를 모두 소진하였습니다. Game Over!!!!\n정답 : ${answer}`)
        break;
      }
      alert(`Down!!~~`);
      max = userAnswer - 1;
    } else if(userAnswer < answer) {
      chance--;
      if(chance === 0) {
        alert(`기회를 모두 소진하였습니다. Game Over!!!!\n정답 : ${answer}`)
        break;
      }
      alert(`Up!!~~`);
      min = userAnswer + 1;
    } else {
      continue;
    }
  }

  //게임 재시작 여부 확인
  var exitFlag = confirm(`한판 더 하쉴?`);
  if (!exitFlag) {
    alert(`잘가 게임 고만해 이제~`);
    break;
  }
}
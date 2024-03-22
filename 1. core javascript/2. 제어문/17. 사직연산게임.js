var highScore = 0;

var operation = '';
var answer = 0;
var userAnswer = 0;
var num = 1;
var level = 0;
const high = 1, mid = 2, low = 3;


alert(`~~~~~ 재미있는 사칙연산 게임~~~~~`);
while(true) {
  // 문제 난이도 설정
  while (true) {
    level = +prompt('난이도를 선택하세요!\n난이도 1.상 : 1 ~ 100, 2.중 : 1 ~ 50, 3.하 : 1 ~ 20\n(숫자 입력)');

    if (level === high) {
      level = 100;
    } else if (level === mid) {
      level = 50;
    } else if (level === low) {
      level = 20;
    } else {
      alert(`난이도를 다시 선택하세요`)
      continue;
    }
    break;
  }
  alert(`[즐겁게 문제를 푸시다가 지겨우면 0을 입력해 주세요!]`);

  
  var success = 0;
  var fail = 0;

  while(true) {
    // 사칙연산과 숫자 랜덤 생성
    var x = Math.floor((Math.random() * level) +1);
    var y = Math.floor((Math.random() * level) +1);
    var operationsNum = Math.floor((Math.random() * 3) +1);

    // 사칙연산 숫자에 따른 기호 연결 및 정답 생성
    if(operationsNum === 1) {
      operation = "+";
      answer = x + y;
    } else if(operationsNum === 2) {
      operation = "-";
      answer = x - y;
    } else {
      operation = "x";
      answer = x * y;
    }

    // 유저의 정답을 입력받아, 생성된 정답과 비교.
    // 답이 0이 나올경우 문제를 다시 생성, 0이 아닐경우 유저의 정답 입력 받는 코드 실행
    if (answer !== 0) {
      // 유저 정답 입력받기
      userAnswer = +prompt(`Q${num}. ${x} ${operation} ${y} = ???`);
      // 유저가 0을 입력하면 사칙연산게임이 끝나는 코드 실행.
      if (userAnswer === 0) {
        alert (`게임이 종료되었습니다.\n정답 : ${success}회, 오답 : ${fail}회`);
        break;
      } else if(userAnswer === answer) {
        success++;
        alert(`정답 : ${answer} 정답입니다!`);
      } else {
        fail++;
        alert(`정답 : ${answer} 오답입니다!`)
      }
    } else {
      continue;
    }
    num++;
  }
  if (success > highScore) {
    highScore = success;
  }
  
  alert(` 최고기록 : 정답 ${highScore}회`);

  var exitFlag = confirm(`게임을 다시 진행하시겠습니까?`);
  if (!exitFlag) {
    alert(`좋은하루 되세요~`);
    break;
  }
}
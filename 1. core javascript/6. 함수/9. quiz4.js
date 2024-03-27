
/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

//  =========== 함수 정의 영역 ==========

function calcNumbersTotalAndAverage (...scores) {
  var total = 0;
  for (var n of scores) {
    total += n;
  }
  return {
    total, // 어쩌다가 변수와 객체의 key 의 이름이 같으면 key만 써줄 경우 자동으로 값으로 변수 total값을 가짐.
    avg : total / scores.length
  }
}

// ========== 실행 영역 ==========

var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);


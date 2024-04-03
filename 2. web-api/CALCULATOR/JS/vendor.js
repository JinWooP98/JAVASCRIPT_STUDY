
// 프로그램 전체에서 사용할 전역적인 변수, 상수와 함수를 정의
const $userInput = document.getElementById('input-number');

const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');

// result 요소노드
const $currentResult = document.getElementById('current-result');
// 계산 로그 요소 노드
const $currentCalculation = document.getElementById('current-calculation');

// 계산 엔트리 요소 노드
const $entries = document.querySelector('.log-entries');
// result에 그려질 숫자
let currentResult = 0;

let order = 1;
//==================== 함수 정의 영역 ====================//
// 계산 기능 헬퍼 함수
const calculate = (operations) => {
  // 부호 값을 가져오기
    const operation = operations.textContent;
    let operationStr = '';
  // 더하기를 해야 함
  // 계산 전 값을 백업
  const prevResult = currentResult;
  // 1. 입력창에 입력한 숫자를 읽어와야 함.
  const enteredNumber = +$userInput.value;
  
  // 2. 결과에 누적
  if(operation === '+') {
    currentResult += enteredNumber;
    operationStr = '+';
  } else if(operation === '-') {
    currentResult -= enteredNumber;
    operationStr = '-';
  } else if (operation === '*') {
    currentResult = currentResult * enteredNumber;
    operationStr = 'x';
  } else {
    currentResult = (currentResult / enteredNumber).toFixed();
    operationStr = '÷';
  }
  
  // 3. 화면에 렌더링
  $currentResult.textContent = currentResult;

  // 계산 로그 생성
  const descriptionLog = `${prevResult} ${operationStr} ${enteredNumber}`
  $currentCalculation.textContent = descriptionLog;

  // 계산 엔트리 생성
  const $entrie = document.createElement('li');
  $entrie.classList.add('log-entries__item');
  $entrie.textContent = `#${order}. ${descriptionLog} = ${currentResult}`;
  if([...$entries.children].length >= 3) {
    $entries.removeChild($entries.firstElementChild);
  }
  $entries.appendChild($entrie);
  order++;

};

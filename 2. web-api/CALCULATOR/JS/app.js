
// 실행코드 (함수 호출, 이벤트등록..., 핸들러정의)

// 이벤트 핸들러 바인딩
$addBtn.addEventListener('click', e => {
  // 연산 처리 함수
  calculate(e.target);
});
$subtractBtn.addEventListener('click', e => {
  calculate(e.target);
});
$multiplyBtn.addEventListener('click', e => {
  calculate(e.target);
});
$divideBtn.addEventListener('click', e => {
  calculate(e.target);
});
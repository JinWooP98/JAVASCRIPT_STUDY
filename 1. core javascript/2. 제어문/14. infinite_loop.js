
//  1 ~ 10사이의 랜덤정수
// random() * (y - x +1) + x

while (true) {
  var rn = Math.floor(Math.random() * 10) +1
  console.log('hello');
  if (rn === 7) break;               //이렇게 짤 경우 무한 loop에 빠짐. 따라서 이럴 경우 안에 if () break가 반드시 있어야 함.
}

console.log(`반복문 종료!!`);
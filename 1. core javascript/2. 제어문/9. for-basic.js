

for ( var i = 1; i <= 5; i++ ) {
  console.log('hello');
}

//  while은 코드가 길어지면 이것이 몇번 반복하는지 예측하기 어려움
//  따라서, 횟수가 정해져 있는 반복은 for, 횟수가 정해져 있지 않으면 while
var total = 0;
for (var i = 1; i <= 10; i++) {
  total += i;
}
console.log(total);

// 횟수 지정 반복문
for(var i = 0; i < 5; i++) {
  console.log(`메롱`);
}

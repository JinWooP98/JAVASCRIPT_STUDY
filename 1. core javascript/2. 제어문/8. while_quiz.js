var begin = +prompt(`첫번째 숫자 입력`);
var end = +prompt(`두번째 숫자 입력`);


var i = begin;
var result = 0

while (i <= end) {
  result += i;
  i++;
}

alert (`${begin}~${end}까지의 누적 합은 ${result}입니다.`);

// var num = +prompt(`양의 정수를 입력`);
// var i = 1;
// var result2 = '';

// while(i <= num) {
//   if (i % 2 === 1) {
//     result2 = result2 + '+';

//   } else {
//     result2 = result2 + '-';
//   }
//   i++;
// }

// alert(`${result2}`);

// var a = +prompt(`양의 정수를 입력하세요`)

// var total = '';
// for(var i=2; i <= a; i*=2) {
//   total += `${i} `
// }
// alert(`${total}`)

// console.log('=============================');

var b = +prompt('정수값:');
var c = 0;
var sum = '';
for(var i = 1; i <= b; i++) {
  if (b % i === 0) {
    sum += `${i}\n`
    c++;
  }
}

alert(`${sum}${b}의약수는 ${c}개 입니다.`);
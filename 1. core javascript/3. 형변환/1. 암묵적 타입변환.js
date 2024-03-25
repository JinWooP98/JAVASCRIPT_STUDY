//숫자 + 문자열의 경우 숫자를 string으로 변환하여 계산(?)
var n1 = 10;
var n2 = '20';

console.log(n1 + n2);

var n3 = n1 + '';
console.log(typeof n3);

// 숫자 - 문자열의 경우 문자를 number로 변환하여 계산. 단, 문자열이 순수한 숫자로 이루어 졌을 때.
var n4 = n2 - n1 - 5 - '3' * '8';
console.log(n4);

//  숫자 * 문자열도 숫자 - 문자열과 같이 작동
// 단, 이러한 경우는 javascript에서만.... 다른 언어는 X.
var n5 = n1*n2;
console.log(n5);

var n6 = 'hello' * 3;
console.log(n6);  // 결과 : NaN --> 숫자가 아니라는 것, 연산이 불가능하다는

console.log('=====================================================================================');

var n7 = -'99'; // + - 같은 기호가 붙었을때 문자열인 숫자는  타입이 number가 된다.

//  true = 1, false = 0을 반환
console.log(true + true); // 결과 2;
console.log(true + false); // 결과 1;
console.log(false + false); // 결과 0;

console.log('=========================================================================================');

// truthy falsy??? 논리 타입이 아닌것을 논리 타입으로 판단하는 것.
// falsy : 0, ', null, undefined, NaN ---> 이 5개 빼면 전부 truthy;

// falsy
if(0) console.log('hello-1');
if('') console.log('hello-2');
if(null) console.log('hello-3');
if(undefined) console.log('hello-4');
if(NaN) console.log('hello-5');

// truthy
if(99) console.log('hello-6');
if(-87.5) console.log('hello-7');
if(`안녕?`)console.log('hello-8');
if(` `)console.log('hello-9'); // 스페이스(공백)도 데이터가 있으므로 truthy
if([10, 20, 30])console.log('hello-10');
if([])console.log('hello-11');
if({ kind : '개'})console.log('hello-12');
if(function() {})console.log('hello-13');


for (var i = 1; i <= 10; i++) {
  if(i % 2) {
    console.log(`${i}는 홀수입니다.`);
  } else {
    console.log(`${i}는 짝수입니다.`);
  }
}

console.log('=========================================================');

var apple = 10;
if(apple > 0) {
  console.log('사과가 있습니다.');
} else {
  console.log('사과가 없습니다.');
}
var n = 20;
var flag = n > 10;

if (flag) {};
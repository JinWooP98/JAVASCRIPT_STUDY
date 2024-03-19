
// js는 정수나눗셈이어도 실수결과값이 나옴
console.log( 27 / 5 );

// 나머지 연산
console.log( 27 % 5 );
// 뒤에 숫자가 더 크면 앞에 숫자가 그대로 나머지, 몫은 0
console.log( 4 % 10 );

console.log( 5 % 0 ); //나눗셈 불가
console.log( 0 % 5 ); // 몫과 나머지 전부 0

// 제곱 연산
console.log(3 ** 4); // 3의 4제곱

console.log('==========================');

// 증감 연산자
var x = 3;
x++;
++x;
x--;
--x;
console.log(`x: ${x}`);

// 전위 연산 연산 우선도 높음, 후위 연산 연산우선도 낮음
var n1 = 10;
var n2 = n1++;
console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3;
console.log(`n3: ${n3}, n4: ${n4}`);

var xx = 5;
// xx++;
xx = xx + 1; // xx += 1;
xx = xx -1; // xx -= 1;

xx *= 3; // 15
xx /= 5; //3
xx **=  2; // 9
xx %= 4; // 1
// 위의 둘은 결과는 같지만 연산의 횟수가 달라 속도가 달라짐. +1이나 -1을 할땐 ++이나 --를 쓰는게 속도면에서는 더 좋음
console.log(`xx: ${xx}`);
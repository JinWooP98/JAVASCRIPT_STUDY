/*
console.log(`김철수님 안녕하세요! hello!!`);
console.log(`오늘도 즐거운 하루되세요!!`);

// 코드 100줄 정도 작성...

console.log(`박영희님 안녕하세요! hello!!`);
console.log(`오늘도 즐거운 하루되세요!!`);

//코드 500줄 정도 작성...

console.log(`뽀로로님 안녕하세요! hello!!`);
console.log(`오늘도 즐거운 하루되세요!!`);
*/

// 함수 정의 (define function) (만든다)
function sayHello(userName) {
  console.log(`${userName}님 안녕하세요! hello!!`);
  console.log(`오늘도 즐거운 하루되세요!!`);
}

// 함수 호출 (call function) (사용한다)

sayHello("호날두");
sayHello("메시");

function makeLine() {
  console.log("=================================================================================");
}


sayHello('a');
makeLine();
sayHello('b');
makeLine();
sayHello('c');
makeLine();


// 나의 프로그램에서는 원의 넓이를 자주 구함
const PI = 3.14159265;

// 반지름이 r인 원의 넓이를 구하는 함수 정의
function calcAreaCircle(r) {
  return PI * r **2;
}


//  반지름이 5인 원의 넓이
var circle1 = calcAreaCircle(5);
console.log(circle1);

//  반지름이 17인 원의 넓이

var circle2 = calcAreaCircle(17);
console.log(circle2);

// 함수 이름은 웬만하면 동사로 지어주어야 함.
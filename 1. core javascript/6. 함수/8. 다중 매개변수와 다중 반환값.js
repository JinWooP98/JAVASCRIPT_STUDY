function add2(n1, n2) {
  return n1 + n2;
}

function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열, 객체)을 전달한다

function addAll(numbers) {
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}

// ES6 - spread문법 (parameter 앞에 ...)
//  spread는 한개만 존재해야함, 언제 끊을지 몰라서.........
// spread 앞에는 일반 변수 파라미터가 존재 가능, 하지만 spread 뒤에 오게 하는 것은 X
function addAllES6(...numbers) {
  console.log(`numbers: ${numbers}`);
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}
// 100만줄

var r1 = addAll([5, 9, 2, 10, 20]);
console.log(`r1: ${r1}`);

var r2 = addAllES6(10, 20, 30);
console.log(`r2: ${r2}`);

console.log(
  `=======================================================================================`
);

// 다중 반환값
// 함수의 반환값은 언제나 하나다.
function arithmeticOperate(n1, n2) {
  // 변수는 2회 이상 사용될 때 사용하는 것이 좋음
  //   var addResult = n1 + n2;
    // var subResult = n1 - n2;
  //   var multiResult = n1 * n2;
  //   var divResult = n1 / n2;
  return {
    add: add2(n1, n2),
    sub: n1 - n2,
    multi: n1 * n2,
    div: n1 / n2,
  };
}

var r3 = arithmeticOperate(20, 10);
console.log(`덧셈결과: ${r3.add}`);
console.log(`뺄셈결과: ${r3.sub}`);
console.log(`곱셈결과: ${r3.multi}`);
console.log(`나눗셈결과: ${r3.div}`);

var r4 = arithmeticOperate(5, 3).multi;

// 각 함수에 리턴되는 값의 type에 따라 쓸 수 있는 속성? 요소? 가 달라짐

// scope는 모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 자신을 참조할 수 있는 유효범위가 결정되는데 이를 스코프라고 부른다.

var x = 99; // global scope : 전역 변수
var y = true

function foo() {
  var x = `홍길동`; // local scope : 지역 변수
  console.log(`foo x: ${x}`);
  var y = '메롱';
  console.log(`foo y: ${y}`);
  var z = 100;
  return x;
}

var y = foo();
console.log(`x: ${x}`);
console.log(`y: ${y}`);
// console.log(`z: ${z}`);


// 전역 변수는 어디서든 사용 가능
// 지역 변수는 그 함수 내에서만 사용가능, 바깥에선 사용 X return을 하지 않는 한.

console.log(`==================================================================================`);

// scope 채인? 체인? 변수를 찾을 때 가까운 곳부터 찾는다.

// 중첩 함수 : 함수 안에 함수를 정의
function outer(m) {
  var n = 'outer local n';
  var v = `outer local v`;
  console.log(n);
  console.log(v);
  console.log(m);

  // 헬퍼 함수: 바깥쪽 함수 전용함수
  function inner () {
    console.log(n);
    var m = `inner local m`;
    console.log(m);
  }

  inner ();
}

outer(`outer param m`);


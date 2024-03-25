

true && true;   // t
true && false;  // f
false && true;  // f
false && false; // f


true || true;   // t
true || false;  // t
false || true;  // t
false || false; // f


//  OR연산 : 첫번째 truthy를 반환
console.log('hello' || 'bye');
console.log(null || '안녕');

//  AND연산 : 첫번째 falsy를 반환  //둘다 참이면 뒤에것을 반환
console.log(`메롱` && '즐~~');
console.log( 0 && '룰루랄라');



if (조건이 참이면) {
  console.log(('blah blah~~~'));
}

조건 && console.log('blah blah~~~');

/*
  <h1>안녕하세요</h1>
  login && <h2>xxx님 환영합니다</h2>

  쿠폰당첨여부 && secndCoupon();
  내게시물여부 && <button>삭제</button>

  // 실무에서는 && 를 많이 씀.
  쿠폰당첨여부 || secndMessage();
*/

// 자바스크립트의 함수는 함수를 리턴할 수 있음

function Calculator(a) {
  return function(n1, n2) {
    return n1 + n2;
  };
}

const x = Calculator();
console.log(typeof x);
const y = x(10, 20);
console.log(`y : ${y}`)


console.log(`========================================`);

const z = Calculator()(6, 9);
console.log(`z: ${z}`);

const operate = () => (n1, n2) => n1 * n2;

const k = operate();
const m = k(3, 5);
console.log(`m: ${m}`);

// 알아야 할 사실... 함수가 함수를 리턴할 수 있음

console.log(`=========================================`);

function bar() {

  function fas() {
    return 10;
  }

  return fas;
}

const h = bar()();

// 카운트를 증가시키는 함수
// let count = 0; //전역변수

// const increase = () => count++;

// console.log(increase());
// console.log(increase());
// count = 999; // 1. 이런 문제로 전역변수를 최대한 자제해야함.
// console.log(increase()); // 2
// console.log(`count: ${count}`);

//2.  지역변수로 쓰면 값이 유지가 안됨...
// const increase = () => {
//   let count = 0;
//   return ++count;
// };

// increase();
// increase();
// const count = increase();
// console.log(`count: ${count}`);

//  클로저를 통해 지역변수의 스코프를 늘려줄 수 있다.
const increaseClosure = () => {
  let count = 0; //지역변수

  return () => ++count;
};

const increase = increaseClosure();

console.log(increase());
console.log(increase());
console.log(increase());

// 즉시 실행 함수 : 함수를 1회성으로 사용할 목적으로 만드는 함수
// 한번만 실행하고 버릴거니까 익명함수로 만든다
console.log(`====================================================`);

(function () {
  console.log(`hello`);
})();

 const increase_ = (() => {
  let count = 0;
  return () => ++count;
})();



increase_();
increase_();
increase_();
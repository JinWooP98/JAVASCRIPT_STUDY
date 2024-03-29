

// createCounter 라는 클로저 함수를 만드세요
// 파라미터로 전달받은 숫자부터 시작하고 반환받은 헬퍼함수를 작동하면 
// 해당 숫자부터 카운트가 증가한다.
const createCounter = (a) => {
  let num = a;
  return () =>  num++;
};

counterNumber = createCounter(456);
console.log(counterNumber());
console.log(counterNumber());
console.log(counterNumber());
console.log(counterNumber());
console.log(counterNumber());

// createCalculator를 호출하면 반환되는 헬퍼함수는
// 3가지의 기능을 갖고 있는데
//  add를 하면 더하고, substract를 하면 빼고 getTotal을 하면 최종값.... 초기 값은 0

const {add, substract, getTotal} = (() => {
  let num = 0;
  return {
    add : (a) => num += a,
    substract : (a) => num -= a,
    getTotal : () => num
  };
})();

console.log(add(5));
console.log(add(5));
console.log(add(5));
console.log(substract(5));
console.log(getTotal());

let x;
x = `zz`;
x ='ff';
console.log(x);

// const : 상수(변경 불가능한 데이터) 선언
// 상수는 값을 고정시키기 위해 사용
const y = '메롱';
console.log(y);

const PI = 3.1415965;
const COLOR_GREEN = '#0f0'
/*
 $div.style.background = COLOR_GREEN;
*/

// 상수는 객체의 불변성(통채로 갈아끼워지면 안된다는 것)을 유지할 수 있다.
const kim = {
  name : `김철수`,
  age : 30,
};
kim.age = 31;
kim.name = '마이클 킴';

// kim = {
//   name : '김철수',
//   age : 30,
// };



// 배열은 객체의 일부, 객체의 하위개념
const array = {
  0: `z`,
  1: 'dd',
  2: 'ddf',
  length: 3,
};
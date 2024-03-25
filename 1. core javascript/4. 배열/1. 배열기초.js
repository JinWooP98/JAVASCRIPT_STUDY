
var food1 = '짬뽕';
var food2 = '탕수육';
var food3 = '자몽';

var all = `${food1}, ${food2}, ${food3}`;

// 배열 === 묶어서 보관한다

var arr = [10, 20, 30, 40];
console.log(typeof arr); //object (객체 : 여러개의 데이터가 있는 것)

console.log(arr[1]);

console.log(arr[2] ** 2);
console.log(arr[2]);


arr[1] = 999;
arr[3]++;

console.log(arr);

// 배열 데이터 수 확인
console.log(arr.length);

console.log(`첫번째 데이터 : ${typeof arr[0]}`);
console.log(`마지막 데이터 : ${arr[arr.length - 1]}`);

// 배열 데이터 순회 (전체참조: travis)
console.log(`===========================================`);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log(`===========================================`);

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for ~ of 반복문 (배열 전용 반복문)
var weekDays = ['월', '화', '수', '목', '금', '토', '일'];
console.log('=============================================');

// for (var i = 0; i < weekDays.length; i++) {
//   console.log(`${weekDays[i]}요일!!`);
// }

// of 뒤엔 배열이 꼭 와야함!! // of 뒤의 배열의 0번 인덱스 부터 하나씩 값을 꺼내 of 앞의 변수에 저장해서 for문을 실행.
// 다만 전체 순회에서만 좋고, 특정 인덱스 조건을 걸수 없음.
for ( var day of weekDays) {
  console.log(`${day}요일!!`);
}

for (var n of [1, 3, 5, 7]) {};

//  배열 생성 관례: 이름 복수형, -List 어미
var fruits = ['자몽', '딸기', '오렌지', ];
var fruitList = ['자몽', '딸기', '오렌지'];
var fruitArray = ['자몽', '딸기', '오렌지'];

console.log(fruits.length);

// js에서는 마지막 배열 뒤에도 ,가 있어도 배열에 영향 X , 따라서 관례적으로 마지막 배열 뒤에 ,를 붙임
var tags = [
  '<li>오렌지</li>',
  '<a href = "#">링크</a>',
  '<h1>로고</h1>',
  '<h2>로고</h2>',
];
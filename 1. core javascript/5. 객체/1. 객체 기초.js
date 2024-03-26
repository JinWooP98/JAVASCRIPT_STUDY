
// 객체 생성
// 우리 집 강아지 정보 저장
var name = `뽀삐`;
var kind = '진돗개';
var age = 3;
var injection = true;
var favorite = ['산택', `간식`];
var bark = () => console.log((`왈왈!`));

var dog = [
  '뽀삐',
  '진돗개',
  3,
  true,
  ['산책', '간식'],
  () => console.log('왈왈!'),
];

var dog = {
  name : '뽀삐',
  kind : '진돗개',
  age : 3,
  injection : true,
  favorite: ['산책', '간식'],
  bark : () => console.log(`왈왈!`),
};


//  우리 집 고양이 정보 저장
var cat = {
  name : '쿠키',
  kind : '렉돌',
  age : 2,
  injection : true,
  favorite: ['봉지', '잠'],
  bark : () => console.log(`냐냥!`),
  hate : null
};
//  value에는 아무 값이나 와도 되지만, key의 경우 그냥 문자만 써야함, 띄워쓰기를 하고 싶으면 '' 사용(굳이 하지 말자)
console.log(dog.name);
console.log(cat.name);

console.log(`================================================================`);

//  객체에 저장된 데이터 참조(조회)
console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]);

//  데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
dog.age++;
!dog.injection;
dog.favorite.push(`꼬리흔들기`);
cat.favorite.splice(0, 1);

dog.favorite.slice(0).splice(1, 1).reverse();

// 객체를 참조하는 두번째 방법
console.log('================================================================');

var key = `name`;
console.log(dog.name);
console.log(dog['name']); // 꼭 문자열로 key를 써주어야함.
console.log(dog[key]);
console.log(dog['name']);

// 프로퍼티수정 (기존에 있는 key로 접근)
console.log(`=================================================================`);

dog.age = 4;
cat.favorite[1] = `실뭉치`;

console.log(dog);
console.log(cat);

// 프로퍼티 동적 추가 (기존에 없는 key로 접근)
console.log(`==================================================`);

cat.friend = '철수'
console.log(cat);

// 프로퍼티 삭제
delete cat.hate;
delete cat.friend;
console.log(cat);


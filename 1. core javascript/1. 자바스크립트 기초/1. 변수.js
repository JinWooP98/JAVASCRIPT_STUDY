
var result; // 변수 선언

result = 10 + 20; // 값을 변수에 할당(대입)

// = 은 오른쪽 값을 왼쪽에 저장한다는 뜻, 같다는 X

var multiple = result * 3; //90
console.log(multiple);

//  특정 값을 저장해놓고 쓰기위해 지정하는 것을 변수라고 함.

var fruit;
fruit = '자몽';
console.log(fruit);

// 변수의 초기화 - 변수에 값을 저장하는 행위.

var food = '볶음밥';
// 변수 선언과 동시에 초기화.

food = '돈까스';
//  변수 재할당

console.log(food);

//  변수 이름 규칙
// var 7number; 숫자가 맨 앞에 오면 X
var num7ber; // (O)

// var user name; 띄워쓰기 (X)
var current_login_user_phone_number; // snake case
var currentLoginUserPhoneNumber; // camel case
// javascript는 camel case를 관례적으로 사용. 문법적으론 틀리지 X

var apple;
var APPLE; // 두개는 다른 변수, 변수이름은 대소문자를 구별한다.

// var myPetName!; // 변수 이름으로 특수문자 사용 X. but, 허용 되는 특수문자 2개 ($),(_)
var _myPetName$

// var for;  // 변수 이름으로 키워드, 예약어 (X)
// var let; (X)
var For; //(O) 키워드나 예약어는 대부분 소문자여서 대문자로는 가능... 추천 X

// 변수 이름은 구체적이고 명확하고 일관성있게 지을것!!!

var myMoney = 1000;

const $orange = '#ffa808'; // 한번 초기화한 상수는 재할당 불가능!
// 상수는 보통 전부 대문자로 씀, 따라서 camel case 대신 snake case를 쓴다.
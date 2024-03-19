
var num = 27;
console.log(typeof num);

console.log(num / 5);


var foodName = '깐풍기'; // '' , "" , `` --> 벡틱
console.log(foodName);

var element = '<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>';
console.log(element);

// 벡틱 1번째 기능, 코드 내 enter 가능
var elem = `
<nav>
  <ul>
    <li>메롱</li>
  </ul>
</nav>
`;

console.log(elem);

console.log('==================================');
// 벡틱 2번째 기능, ${변수명}으로 더 간략하게 사용가능.
var month = 6;
var day = 6;
var anni = '현충일';

var sentence = month + '월 ' + day + '일은 ' + anni + '입니다.'
console.log(sentence);

var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`;
console.log(sentence2);

// boolean : 논리
var userAge = 30;
var flag = userAge > 19;
console.log(flag);
console.log(typeof flag);

// undefined : 아직 값이 없는 상태 (고의로 값을 안넣은 것이 아님)
// null : 일부러 값을 없앤 상태 (고의로 값을 없앰)
var petName;
console.log(petName);

var myHobby = '산책';
myHobby = null;
console.log(myHobby);

function buyNewCar(money){
  if(money > 5000) return '그랜져';
  else if (money > 3000) return '아반떼';
  else if (money <= 0) return null;
}
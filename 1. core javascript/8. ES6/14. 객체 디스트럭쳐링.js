// 사용빈도 높음

const employee = {
  empName : `뽀로로`,
  age : 10,
  hireDate : `2020-01-30`,
  birthDate : `2015-12-31`,
};

const {empName, hireDate} = employee;
console.log(`name: ${empName}, hire: ${hireDate}`);

//파라미터에 바로 써줘도 됨
function foo({ empName, age }) {
  // const { empName, age } = employee;
  console.log(`내 이름은 ${empName}입니다.`);
  console.log(`내 나이는 ${age}입니다.`);
}

const age = 10;
// employee의 age를 추출할건데, 그 변수를 empAge로 하겠다, 이름이 충돌이 났을때 사용하는 기능.
const {age: empAge, birthDate} = employee;

const divStyle = {
  'font-size' : `18px`,
  'background-color' : `red`
};

const { 'font-size' : fontSize, 'background-color' : bgColor } = divStyle;
console.log(fontSize);
console.log(bgColor);

console.log(`=======================================`);

const dog = {
  person : {
    mom : dsklf,
    fater : dsaf
  },
  kind : `말티즈`,
  name : `해피`,
  age : 3,
  injection : false
}
const { kind, age : petAge, ...rest} = dog;
console.log(kind);
console.log(petAge);
console.log(rest);

//  객체 안전 복사
// 객체도 바로 디스트럭쳐링을 하면 원본이 손상되므로 복사 후 진행
const copyDog = {...dog};
copyDog.age = 10;

// 복사를 하면서 복사하려는 객체에 있는 key와 값을 또 입력하면, 입력한 값으로 변경, 없던 key와 값을 입력하면 추가됨
const copyDog2 = {
  ...dog,
  age : 20,
  favorite: [`산책`]
};



console.log(dog);
console.log(copyDog);
console.log(copyDog2);
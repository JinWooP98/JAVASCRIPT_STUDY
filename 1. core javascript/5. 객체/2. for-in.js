
var phone = {
  company : '삼성',
  color : '펄 화이트',
  model : '갤럭시 S24 Ultra',
  price : 1200000,
};

//  값이 아닌 키가 반복됨
for (var data in phone) {
  console.log(data);
  console.log(phone[data]);
  // console.log(typeof data);

}
// data는 스트링 타입으로 key값을 저장 ---> data = 'company' 이런식
// 따라서 phone['key']식으로 접근해야함


// 객체 프로퍼티 유무 확인
//  phone에 새로운 프로퍼티 추가하고 싶음
console.log(`===============================================`);
console.log('memory' in phone);

if(!('memory' in phone)) {
  phone.memory = '32GB';
}
console.log(phone);
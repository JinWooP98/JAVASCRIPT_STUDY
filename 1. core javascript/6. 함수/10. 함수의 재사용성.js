// 상수여서 전부 대문자, snakecase
const NOT_FOUND = -1;

//  배열안에 특정 요소의 인덱스를 찾아 반환하는 함수
function myIndexOf(array, searchElement) {
  for (var i = 0; i < array.length; i++) {
    if (searchElement === array[i]) {
      return i;
    }
  }
  return NOT_FOUND;
}
// myIndexOf를 이용한 myIncludes 함수 만들기
function myIncludes(array, searchElement) {
  return myIndexOf(array, searchElement) !== NOT_FOUND;
}

var foods = [`족발`, `피자`, `파스타`, `김치찌개`];

var idx = myIndexOf(foods, `피자`);
console.log(`index: ${idx}`);

var flag = myIncludes(foods, "족발");
console.log(`flag: ${flag}`);

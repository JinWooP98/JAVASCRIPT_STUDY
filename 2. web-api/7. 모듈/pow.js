
// 만약에 내보낼 데이터가 1개라면 default를 쓸 수 있다.
// default를 사용하면 import 할 때 대괄호 생략 가능 및 내 마음대로 이름을 지정하여 쓸 수 있다.
// 만약 import 하는 곳에서 여기서 만든 함수와 같은 이름을 쓰더라도 import 할때 이름을 지정할 수 있으므로, 이름 충돌을 줄일 수 있다.
const pow = n => n ** 2;
const add = (n1, n2) => n1 + n2;

export default {pow, add};
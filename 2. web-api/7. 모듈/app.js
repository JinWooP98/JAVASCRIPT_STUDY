
import { $btn as $button } from "./getDom.js"; // 불러온 변수
import { clickHandler } from "./event.js";
import hahahoho from "./pow.js";

const $btn = '123'; // 내가 만든 변수
console.log(`내가 만든 btn : ${$btn}`);
console.log(`불러온 btn : ${$button}`);
console.log(hahahoho.pow(5));
console.log(hahahoho.add(5, 8));
// event.js에서 만든 이벤트 핸들러 등록
$button.addEventListener('click', clickHandler);

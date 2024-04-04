import { insertTodoData } from "./todos-modify.js";
import { removeTodoData, toggleModifyMode, toggleDone } from "./todos-modify.js";


const handlerBinding = () => {
  // ============== 함수 실행 영역 ================ //
// button의 타입이 submit이면 'Enter'을 쳐도 제출 가능
// 따로 키보드 이벤트 만들 필요 없음
// 추가 버튼 클릭 이벤트
document.getElementById("add").addEventListener("click", (e) => {
  e.preventDefault(); // form의 button의 type의 기본 설정 submit 중단
  insertTodoData();
});

document.querySelector('.todo-list').addEventListener('click', e => {
  // 클릭한 버튼이 포함된 li 선택
  const $targetLi = e.target.closest('.todo-list-item'); //e.target.parentElement.parentElement;
  // 데이터 아이디 추출
  const dataId = +$targetLi.dataset.id;

  // 삭제 버튼 클릭 이벤트
  if(e.target.matches('.remove span')) {
    
    // 삭제 처리 진행
    
    // 화면에서 제거
    document.querySelector('.todo-list').removeChild($targetLi);
    // $targetLi.remove();
    
    // 배열에서 데이터 제거
    removeTodoData(+dataId);
    
    // 체크박스 클릭 이벤트
  } else if (e.target.matches('.checkbox input[type=checkbox]')) {
    
    isChecked(e.target);
    toggleDone(+dataId);
    
    // 수정버튼 클릭 이벤트
  }  else if (e.target.matches('.modify span')) {
    toggleModifyMode(e.target);
  }

});

document.querySelector('.todo-list').addEventListener('keyup', e => {
  // console.log(e.target);
  const $checkbutton = e.target.closest('.todo-list-item').querySelector('.modify .lnr');
  if(!$checkbutton.matches('.lnr-checkmark-circle')) return;
  // console.log('ke');
  if(e.key === 'Enter') $checkbutton.click();
});

}

export default handlerBinding;
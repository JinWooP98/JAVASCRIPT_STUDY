// 1. 할 일 추가하기, +나 enter을 누르면 맨 마지막에 추가
// 1-1. 아무것도 안쓰고 enter을 누르면 필수 입력사항입니다!
// 2. 체크기능, 체크박스를 누르거나 그 박스를 누르면 체크되도록
// 3. 삭제기능 X를 누르면
// 4. 수정기능, 수정버튼을 누르면 수정 모드로 진입
// 4-1. 수정 내용 입력 후 v버튼이나 엔터 누르면 수정되도록

// =============== 지역 변수 영역 =============== //
const $ul = document.querySelector(".todo-list");
const toDoList = [...$ul.children];
const $addBtn = document.getElementById('add');
const $addToDolist = document.getElementById("todo-text");

// =============== 함수 생성 영역 =============== //

function addListFunc () {
  const $newList = document.createElement("li");
    $newList.classList.add("todo-list-item");
    $newList.dataset.id = toDoList.length + 1;
    $newList.innerHTML += 
    `<label class="checkbox">
      <input type="checkbox">
      <span class="text">${$addToDolist.value}</span>
    </label>
    <div class="modify">
      <span class="lnr lnr-undo"></span>
    </div>
    <div class="remove">
      <span class="lnr lnr-cross-circle"></span>
    </div>`;
    $ul.appendChild($newList);
    $addToDolist.value = '';
}

// =============== 함수 호출 영역 =============== //
// + 버튼 클릭시 TODOList 추가
$addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if ($addToDolist.value === "") {
    $addToDolist.style.background = "red";
    $addToDolist.placeholder = "필수 입력 값입니다.";
  } else {
    addListFunc();
  }
});
// 할일 입력 창에서 enter 누를 시 버튼 클릭핸들러 실행
document.getElementById('todo-text').addEventListener('keyup', e => {
  // e.preventDefault();
  if(e.key === 'Enter') {
    $addBtn.click;
  } else {
    $addToDolist.style.background = null;
  }
});
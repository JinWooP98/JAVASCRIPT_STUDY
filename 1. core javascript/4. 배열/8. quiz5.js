var tvxq = ["아이돈노유돈노", "최강창민", "영웅재중", "믹키유천", "시아준수"];

var tvxqCopy = tvxq.slice();

var inputMenu = 0;
var inputName = "";
var nameIndex;
var memberName;

exit: while (true) {
  inputMenu = prompt(
    `현재 멤버 : ${tvxqCopy}\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 이름 수정\n4. 프로그램 종료`
  );

  switch (inputMenu) {
    case `1`:
    case "새로운 이름 추가":
      inputName = prompt(`추가할 새로운 멤버의 이름을 입력하세요.`);
      tvxqCopy.push(inputName);
      alert(`${inputName}이(가) 추가되었습니다.`);
      break;

    case `2`:
    case "기존 이름 삭제":
      inputName = prompt(
        `삭제할 멤버의 이름을 입력하세요.\n 현재 멤버 : ${tvxqCopy}`
      );
      if (tvxqCopy.includes(inputName)) {
        nameIndex = tvxqCopy.indexOf(inputName);
        tvxqCopy.splice(nameIndex, 1);
        alert(`${inputName}이(가) 삭제되었습니다.`);
      } else {
        alert(`정확한 멤버 이름을 입력하여 주세요.`);
      }
      break;

    case "3":
    case "이름 수정":
      memberName = prompt(`수정할 멤버의 이름을 입력하세요.`);
      if (tvxqCopy.includes(memberName)) {
        nameIndex = tvxqCopy.indexOf(memberName);
        inputName = prompt(`대체할 새로운 이름을 입력하세요.`);
        tvxqCopy.splice(nameIndex, 1, inputName);
      } else {
        alert(`수정할 멤버의 이름을 정확히 입력하세요.`);
      }
      break;
    case `4`:
    case "프로그램 종료":
      alert(`최종 멤버 : ${tvxqCopy}`);
      alert(`프로그램을 종요합니다.`);
      break exit;

    default:
      alert(`정확한 메뉴 번호나 메뉴 명을 입력하여 주세요.`);
      break;
  }
}

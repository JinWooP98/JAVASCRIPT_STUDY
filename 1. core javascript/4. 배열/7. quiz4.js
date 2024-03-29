/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/

var tvxq = ["아이돈노유돈노", "최강창민", "영웅재중", "믹키유천", "시아준수"];

var tvxqCopy = tvxq.slice();
var memberName = "";
var newName = "";
var nameIndex;

while (true) {
  memberName = prompt(
    `수정할 멤버 이름을 선택하세요.\n현재 멤버 = ${tvxqCopy}\n수정을 그만두고 싶으시면 '그만'을 입력해 주세요.`
  );

  if (memberName === "그만") {
    break;
  }

  if (tvxqCopy.includes(memberName)) {
    nameIndex = tvxqCopy.indexOf(memberName);
    newName = prompt(
      `대체할 새로운 멤버 이름을 입력하세요.\n수정할 멤버 이름 = ${memberName}`
    );
    //tvxqCopy[nameIndex] = newName;
    tvxqCopy.splice(nameIndex, 1, `${newName}`);
    alert(`수정 완료!\n현재 멤버 = ${tvxqCopy}`);
  } else {
    alert(`${memberName}은(는) 멤버 목록에 없습니다.`);
  }
}
alert(`최종 멤버 : ${tvxqCopy}`);

var userInfo = {
  userList: [
    {
      account: "kim1234",
      password: "kkk1234",
      username: "김두한",
    },
    {
      account: "park9876",
      password: "ppp9999",
      username: "박찬호",
    },
    {
      account: "hong7766",
      password: "hhh1234",
      username: "홍길동",
    },
  ],
};

// 위 객체에서 배열만 추출
var userList = userInfo.userList;

while (true) {
  // 계정을 입력받고 해당 계정이 존재하는 계정인지를 확인
  var inputAccount = prompt(`아이디를 입력하세요.`); //사용자 입력한 계정명

  // 회원목록 배열을 반복순회하여 입력한 계정명과 일치하는 계정이 있는지 체크
  // 8*****************************************************************************************************
  var foundUser = null;
  for (var user of userList) {
    if (inputAccount === user.account) {
      foundUser = user;
      break;
    }
  }
  // ******************************************************************************************************88
  if (foundUser !== null) {
    // 비번 검증
    // 사용자에게 비번 입력받기
    var inputPassword = prompt(`비번을 입력하세요.`);
    if (inputPassword === foundUser.password) {
      alert(`${foundUser.username}님 환영합니다.`);
      break;
    } else {
      alert(`비밀번호가 틀렸습니다.`);
    }
  } else {
    alert("존재하지 않는 아이디 입니다.");
  }
}

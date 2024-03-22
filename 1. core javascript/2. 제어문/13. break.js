
for(var i = 1; i <= 50; i++) {
  console.log(i);
  if ( i > 10) {
    break;
  }
}

console.log('===============================================================================');
grape : for (var i = 0; i < 3; i++) {
strawberry : for (var j = 0; j < 2; j++) {
    if(i === j) {
      break;  // break grape, break strawberry; 해당 이름을 가진 for문에 break를 건다.
    }
    console.log((`${i}, ${j}`));
  }
}
//이중 반복문일 경우 breack를 바로 감싸고 있는 반복문만 중지시킴.
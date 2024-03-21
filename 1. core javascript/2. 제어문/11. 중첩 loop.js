
// var count = 0;
// for (var i = 0; i < 3; i++) {
//   for(var j = 0; j < 2; j++) {
//     count++;
//     // console.log(`메롱` + count);
//     console.log(`${i}, ${j}`);
//   }
// }

// 구구단

for(var level = 2; level <= 9; level++) {
  console.log(`# 구구단 ${level}단`);
  for(var line = 1; line <= 9; line++) {
    console.log(`-> ${level} X ${line} = ${level * line}`);
  }
}




var scores = [83, 99, 100, 57, 100, 61];
var sum = 0;
var average = 0;

for ( var score of scores) {
  sum += score;
}

average = sum / scores.length;

console.log(`총점 : ${sum}점, 평균 : ${average}점`);
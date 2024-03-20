// //  몇개의 값이 같은지
var A = Math.floor(+prompt(`정수 A`));
var B = Math.floor(+prompt(`정수 B`));
var C = Math.floor(+prompt(`정수 C`));

if ( A === B && A === C) {
  alert (`모두 같은 값입니다.`);
} else if ( A === B || A === C || B === C) {
  alert (`2개 값이 같습니다.`);
}  else {
  alert (`모두 다른 값입니다.`);
}

//  두 값의 차, 단... 양수로만
var D = Math.floor(+prompt(`정수 D`));
var E = Math.floor(+prompt(`정수 E`));

var diff = ( D > E ) ? D - E : E - D;
alert(`두 값의 차이는 ${diff}입니다.`)

// if ( D >= E ) {
//   alert (`두 값의 차이는 ${D-E}입니다.`);
// } else {
//   alert (`두 값의 차이는 ${E-D}입니다.`);
// }

//  3개의 값중 가장 작은 값
var F = Math.floor(+prompt(`정수 F`));
var G = Math.floor(+prompt(`정수 G`));
var H = Math.floor(+prompt(`정수 H`));

var min = F;
if ( G < min ) min = G;
if ( H < min ) min = H;

alert(`최소값은 ${min}입니다.`)

// if ( F <= G && F <= H) {
//   alert (`최솟값은 ${F}입니다.`);
// } else if ( G <= H) {
//   alert (`최솟값은 ${G}입니다.`);
// } else {
//   alert (`최솟값은 ${H}입니다.`);
// }
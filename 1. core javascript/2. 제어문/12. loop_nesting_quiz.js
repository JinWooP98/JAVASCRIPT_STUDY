var height = +prompt('한변(1)');
var width = +prompt('한변(2)');

var nemo = '';

for (var i = 1; i <= height; i++) {
  for(var j = 1; j <= width; j++) {
    nemo += '* ';
  }
  nemo += '\n';
}

alert(`${nemo}`);
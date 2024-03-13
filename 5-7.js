let arr = [3, 4, 5, 10, 0];
var odd = 0;
var even = 0;
var zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    odd++;
  }
  else {
    even++;
  }
  if (arr[i] == 0) {
   odd--;
   zero++;
  }
}

console.log('Четных:' + odd);
console.log('Нечетных:' + even);
console.log ('Нулей:' + zero);
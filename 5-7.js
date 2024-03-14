let arr = [3, 0, 5, 10, null];
var odd = 0;
var even = 0;
var zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    zero ++;
  }
  if (typeof(arr[i]) === "number") {
    if (arr[i] % 2 == 0) {
    odd++;
    }
    else{
      even++;
    }
  } 
}
     
console.log('Четных:' + odd);
console.log('Нечетных:' + even);
console.log ('Нулей:' + zero);
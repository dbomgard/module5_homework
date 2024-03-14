let arr = [3, 3, 3, 3, 3];
let answer = true;

for (let i = 1; i<arr.length; i++) {
  if (arr[i-1] != arr[i]) {
    answer = false;
    break;
  }
}

console.log (answer);
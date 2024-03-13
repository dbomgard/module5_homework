let arr = [3, 4, 4, 4];
let count = 1;

for (let i = 0; i<arr.length; i++) {
  if (arr[i] == arr[i+1]) {
    count ++;
  }
}

if (count == arr.length) {
    console.log (true);
}
else {
    console.log (false);
}
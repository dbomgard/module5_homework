let x = prompt ();
let res = +x;
const type = typeof res;


if (type == "number" && type != "NaN") {
  let answer = res % 2 == 0 ? "Четное" : "Нечетное";
  console.log (answer);
}
else {
   console.log ("Вы ошиблись");
}
let x = prompt ();
let res = +x;
const type = typeof res;

switch (type) {
  case "number": let answer = res % 2 == 0 ? "Четное" : "Нечетное";
                 console.log (answer);
                 break;
  case "string": console.log ("Вы ошиблись");
                 break;
  case "NaN": console.log ("Вы ошиблись");
              break;
  default: console.log ("Вы ошиблись");
}
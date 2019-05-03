"use strict";
if (2 * 4 == 7) {
  console.log('Верно!');
} else {
  console.log('Неверно');
}


let num = 50;

if (num < 49) {
  console.log('Неверно');
} else if (num > 100) {
  console.log('Много');
} else {
  console.log('Верно');
}

(num == 50) ? console.log('Верно') : console.log('Неверно'); //тернарный оператор (три оператора)

switch (num) {
  case num < 49:
    console.log('Верно');
    break;
  case num > 100:
    console.log('Много');
    break;
  case num > 80:
    console.log('Все еще много');
    break;
  case 50:
    console.log('Верно');
    break;
  default:
    console.log('Что-то пошло не так');
    break;
}

let numOne = 50;
// while (numOne < 55) {
//   console.log(numOne);
//   numOne++;
// }

// do {
//   console.log(numOne);
//   numOne++;
// } 
// while (numOne < 55)

for (let i = 0; i < 8; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}


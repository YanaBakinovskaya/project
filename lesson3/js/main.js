"use strict";

function calc(a, b) {
  return (a + b);
}

console.log(calc(3, 4));

// let calcNew = function(a, b) {
//   return (a + b);
// }

let calcNew = (a, b) => a + b;

//логическая задача №1
function train(v1, v2, s) {
  let sumV = v1 + v2;
  let time = s / sumV;
  return time;
} 

console.log(train(55, 74, 400));

//логическая задача №2
let arr2 = [15, 1, 2, 3, 0, 12, 4];

function getArr(mass) {
  let arr3 = [];

  for (let i = 0; i < mass.length; i++) {
    let count = 0;

    for (let j = i + 1; j < mass.length; j++) {
      if (mass[i] > mass[j]) {
        count++ ;
      }
    }
    arr3.push(count);
  }
  console.log(arr3);
}
getArr(arr2);


//1) Вывести в столбик все простые числа от 1 до 100

// ·        Статья про простые числа - КЛИК

// ·        Рядом с каждым числом написать оба делителя данного числа

// ·        Например: “Делители этого числа: 1 и n”

for (let n = 0; n < 100; n++) {
  let x = 1;
  if (n == 0 || n == 1) {
    x = 0;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      x = 0;
      break;
    }
  }
  if (x == 1) {
    console.log(n + ' ' + 'Делители этого числа: ' + x + ' и ' + n);
  }
}


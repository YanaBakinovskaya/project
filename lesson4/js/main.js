"use strict";

let options = {
  width: 1024,
  height: 1024,
  name: 'test'
};

console.log(options.name);

options.bool = false;
options.colors = {
  border: 'black',
  bg: 'red'
};

delete options.bool;
console.log(options);

for (let key in options) {
  console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

let arr = ["first", 2, 3, "four", 5];

// arr.pop();
// arr.push('5');
// arr.shift();
// arr.unshift('1');


arr.forEach(function(item, i, mass) {
  console.log(i + ':' + item + " (массив: " + mass + ')');
});

console.log(arr);

let mass = [1, 3, 4, 6, 7];

for (let key in mass) {
  console.log(key);
}

for (let key of mass) {
  console.log(key);
}

// let ans = prompt('', ''),
//     arr1 = [];

// arr1 = ans.split(',');
// console.log(arr1);

// let arr1 = ['aawe', 'zzz', 'pp', 'rgb'],
//     i = arr1.join(', ');

// console.log(i);

let arr1 = [1, 15, 115, 1115, 4],
    i = arr1.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}
console.log(arr1);

let soldier = {
  health: 400,
  armor: 100
};

let john = {
  health: 100
};
john.__proto__ = soldier;

console.log(john);
console.log(john.armor);




//touchstart

//touchmove

//touchend

//touchenter

//touchleave

//touchcancel

window.addEventListener('DOMContentLoaded', function() {
  let box = document.querySelector('.box');

  // box.addEventListener('touchstart', function(e) {
  //   e.preventDefault();
  //   console.log('Red box: touchstart');
  //   console.log(e.target);

  //   console.log(e.touches);
  //   console.log(e.touches[0].target);

  //   console.log(e.changedTouches);
  //   console.log(e.targetTouches);
  // });
  // box.addEventListener('touchmove', function(e) {
  //   e.preventDefault();
  //   console.log('Red box: touchmove');
  // });
  box.addEventListener('touchmove', function(e) {
    e.preventDefault();
    console.log('Red box: ' + e.touches[0].pageX);
  });
  // box.addEventListener('touchend', function(e) {
  //   e.preventDefault();
  //   console.log('Red box: touchend');
  // });

  // new RegExp('pattern', 'flags');
  // /patern/

  // let ans = prompt('Ваше имя', '');

  // let reg = /n/gi; //ANNNNa первое совпадение

  // // //console.log(ans.search(reg));
  // // console.log(ans.match(reg));
  // console.log(reg.test(ans));

  //i - поиск независимо от регистра
  //g - глобальный поиск
  //m - флаг многострочности

  //\d - число НО \D - не число
  //\w - буква НО \W - не буква
  //\s - space НО \S - не space

  // let ans = prompt('Ваше число', '');

  // let reg = /\d/g; //ANNNNa первое совпадение

  // console.log(ans.match(reg));

  // let pass = prompt('Введите пароль', '');
  // console.log(pass.replace(/./g, '*'));
  // alert('12-34-56'.replace(/-/g, ':'));


  let str = 'My name is R2D2';
  console.log(str.match(/\w\d\w\d/i));

  let str1 = 'My name is/ R2D2';
  console.log(str1.match(/\//i));
  console.log(str1.match(/\*/i));
  console.log(str1.match(/\$/i));
  console.log(str1.match(/ /i));

  let a = 1;
let b = { toString() {return '1'} };
let c = 1;
console.log(a+b+c);

let a1 = new Array(1,2), 
    b1 = new Array(3);
  alert(a1[0] + b1[0]);
});

// f.call(null);

// function f() {
//   alert(this);
// }
// console.log(0 || "" || 2 || undefined || true || falsе);

// function User() { }
// User.prototype = { admin: false };

// let user = new User();

// User.prototype = { admin: true };

// console.log(User.admin);

// let name1 = "Вася";
// function sayHi() {
//   alert(name1);
// }

// setTimeout(function() {
//   let name1 = "Петя";
//   sayHi();
// }, 1000);

// function F() {};
// console.log(F.prototype);

// sayHi();

// function sayHi() {
//   alert("Hello");
// }

// // let a2 = [1,2]

// // (function() { alert(a2); })();

// function MyArray() { }
// MyArray.prototype = [];

// let arr = new MyArray();
// arr.push(1, 2, 3);
// alert(arr.length);

// let a = new Array(1,2), b = new Array(3);
// alert(a[0] + b[0]);


// let f1 = function(x) {
//   console.log(x);
// }

// (function() {
//   f1(1);
// }());


function F() { return F; }

alert( new F() instanceof F );
alert( new F() instanceof Function );
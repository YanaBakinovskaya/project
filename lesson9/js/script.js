//window.addEventListener('load');
//window.addEventListener('DOMContentLoaded', function () {
  //'use strict';
  // ES5
  // function User(name, id) { //class
  //   this.name = name;
  //   this.id = id;
  //   this.human = true;
  //   this.hello = function() {
  //     console.log('hello! ' + this.name); 
  //   };
  // }
  // User.prototype.exit = function(name) {
  //   console.log('Пользователь ' + this.name + ' ушел');
  // }
  // let ivan = new User('Ivan', 25),
  //     alex = new User('Alex', 20);
  // console.log(ivan);

  // ivan.exit();


//});

//ES6
// class User {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//   }
//   hello() {
//     console.log(`hello! ${this.name}`);
//   }
//   exit() {
//     console.log(`Пользователь ${this.name} ушел`);
//   }
// }

// 3) конструктор (new) - this = новый созданный объект

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);
// console.log(ivan);
// console.log(alex);

// ivan.hello();
// alex.hello();
// ivan.exit();

// замыкание функции
//'use strict'; // строгий режим



// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }

// showThis(4, 5); 
// showThis(5, 5);

// 1) просто вызов функции - window/underfine
// 2) метод объекта this - будет равняться самому объекту

// let obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     console.log(this);
//     function shout() {
//       console.log(this);
//     }
//     shout(); // ф-я shout потеряла контекст, вызвана не как метод объекта, а просто как функция внутри функции
//   }
// };
// obj.sum(); // sum это ф-я, но когда она является методом какого-то объекта контекст выполнения и есть сам объект


let user = {
  name: 'John'
};

function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);

}

console.log(sayName.call(user, 'Smith')); // принимает элементы в виде строки
console.log(sayName.apply(user, ['Snow'])); // принимает элементы в виде массива

// function count(number) {
//   return this * number;
// }

// let double = count.bind(2); //возвращает контекст вызова this в нужное нам number
// console.log(double(3));
// console.log(double(10));

// указание конкретного контекста - call, aply, bind

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
  console.log(this);
  this.style.backgroundColor = 'red';
  function showThis () {
    console.log(this);
  }
  showThis();
});



"use strict";
// let timerId = setTimeout(sayHello, 3000);

// //clearTimeout(timerId);



// let timerId = setInterval(sayHello, 3000);

// clearTimeout(timerId);

// function sayHello() {
//   console.log('Hello word!');
// }

//рекурсивный вызов setTimeout
// let timerId = setTimeout(function log() {
//   console.log('Привет');
//   setTimeout(log, 2000);
// });

let btn = document.querySelector('.animate'),
    elem = document.querySelector('.box');

function myAnimation() {
  let pos = 0;

  let id = setInterval(frame, 10);
  function frame() {
    if (pos == 420) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//   if (event.target && event.target.tagName == 'BUTTON') {
//     console.log('hell');
//   }
// });

// btnBlock.addEventListener('click', function(event) {
//   if (event.target && event.target.classList.contains('item')) {
//     console.log('hell');
//   }
// });

btnBlock.addEventListener('click', function(event) {
  if (event.target && event.target.matches('button.item')) {
    console.log('hell');
  }
});
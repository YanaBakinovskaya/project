'use strict';

let hourContent = document.querySelector('.hours'),
    minContent = document.querySelector('.minutes'),
    secContent = document.querySelector('.seconds'),
    time = new Date(),
    hour = time.getHours(),
    min = time.getMinutes(),
    sec = time.getSeconds();

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
function timer(elem, t) {
  elem.textContent = checkTime(t);
}
timer(hourContent, hour);
timer(minContent, min);
timer(secContent, sec);



//use strict;
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper'),
    oneHeart = document.querySelector('.heart');



// console.log(box);
// console.log(btn);
// console.log(btn[0]);

// console.log(circle[2]);
// console.log(heart);
// console.log(oneHeart);

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//   heart[i].style.backgroundColor = 'blue';
// }

heart.forEach(function(item, i, hearts) {
  item.style.backgroundColor = 'blue';
});

let div = document.createElement('div'),
    text = document.createTextNode('Здесь была я');

div.classList.add('black');

// document.body.appendChild(div);

console.log(div);

//wrapper.appendChild(div);

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[2], circle[1]);

// div.innerHTML = '<h1>Привет мир</h1>';

div.textContent = 'Привет мир';

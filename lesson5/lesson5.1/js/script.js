let list = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.querySelector('.title'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    answer = document.getElementById('prompt'),
    question;
    //bgImg = document.querySelector('bo')


menu.insertBefore(list[2], list[1]);

li.classList.add('menu-item');
menu.appendChild(li);
li.innerHTML = 'Пятый пункт';

document.body.style.backgroundImage = 'url("img/apple_true.jpg")';
console.log(list);

title.innerHTML = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

question = prompt('Ваше отношение к технике apple', '');
while(typeof(question) !== 'string' || question == '' || question == null) {
  question = prompt('Ваше отношение к технике apple', '');
}


answer.textContent = question;

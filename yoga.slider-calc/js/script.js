//window.addEventListener('load');
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  //tabs
  function workWithTab(classNameParentTab, classNameTab, classNameTabContent) {
    let info = document.querySelector(classNameParentTab),
      tab = document.querySelectorAll(classNameTab),
      tabContent = document.querySelectorAll(classNameTabContent);

    function hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
      }
    }

    hideTabContent(1);

    function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
      }
    }

    info.addEventListener('click', function (event) {
      let target = event.target;
      if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
    });
  }

  workWithTab('.info-header', '.info-header-tab', '.info-tabcontent');

  //timer
  let deadline = '2019-04-06';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);

      function checkTime(i) {
        if (i < 10) {
          i = '0' + i;
        }
        return i;
      }

      function timerWithZero(elem, t) {
        elem.textContent = checkTime(t);
      }

      timerWithZero(hours, t.hours);
      timerWithZero(minutes, t.minutes);
      timerWithZero(seconds, t.seconds);

      if (t.total < 0) {
        timerWithZero(hours, 0);
        timerWithZero(minutes, 0);
        timerWithZero(seconds, 0);
        clearInterval(timeInterval);
      }
    }

  }

  setClock('timer', deadline);

  //scroll
  let navLink = document.querySelectorAll('[href^="#"]'),
    speed = 2;

  for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function (event) {
      event.preventDefault();
      let w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1'),
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      console.log(hash);

      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start,
          r = (t < 0 ? Math.max(w - progress / speed, w + t) : Math.min(w + progress / speed, w + t));
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL с хэшем
        }
      }
    }, false);
  }

  // show modal

  let overlay = document.querySelector('.overlay'),
    popup = document.querySelector('.popup'),
    close = document.querySelector('.popup-close'),
    descBtn = document.querySelectorAll('.description-btn');
  descBtn.forEach(function (item) {
    item.classList.add('more');
  });

  let more = document.querySelectorAll('.more');

  more.forEach(function (item) {
    item.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
      overlay.style.display = 'none';
      item.classList.remove('more-splash');
      document.body.style.overflow = '';
    });

    overlay.addEventListener('click', function (event) {
      let target = popup;
      if (!target.contains(event.target)) {
        overlay.style.display = 'none';
        item.classList.remove('more-splash');
        document.body.style.overflow = '';
      }
    });
  });

  //form 

  let message = {
    loading: 'Загрузка...',
    //loading: '<img src="img/ajax-loader.gif" alt="">',
    success: 'Спасибо! Скоро мы с Вами свяжемся!',
    //success: '<img src="img/headphones.svg" alt="">',
    failure: 'Что-то пошло не так'
  };

  let form = document.querySelector('.main-form'),
    formContact = document.getElementById('form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

  statusMessage.classList.add('status');


  // проверка input tel

  for (let i = 0; i < input.length; i++) {
    if (input[i].getAttribute('name') == 'phone') {
      input[i].addEventListener('keypress', function () {
        input[i].value = input[i].value.replace(/[^\+\d]/g, '');
      });
    }
  }


  function init(formElem) {
    formElem.addEventListener('submit', function (e) {
      e.preventDefault();
      let formData = new FormData(formElem);
      formElem.appendChild(statusMessage);

      let obj = {};
      formData.forEach(function (value, key, i) {
        obj[key] = value;
      });

      let json = JSON.stringify(obj);


      function postJson(json) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-type', 'appLication/json; charset=utf-8');

          request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status == 200) {
              resolve();
            } else {
              reject();
            }
          });
          request.send(json);
        });
      }
      
      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postJson(json)
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => statusMessage.innerHTML = message.success)
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(clearInput);
    });
  }

  init(form);
  init(formContact);

  //slider
  let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function() {
    plusSlides(-1);
  });

  next.addEventListener('click', function() {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', function(e) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });

  //calc
  let persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      counterInput = document.querySelectorAll('.counter-block-input'),
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;

      totalValue.innerHTML = 0;

      persons.addEventListener('change',function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;
        if (restDays.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total;
        }
      });

      restDays.addEventListener('change',function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;
        if (persons.value == '' || restDays.value == '') {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total;
        }
      });

      place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
        } else {
          let a = total;
          totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
      });

      for (let i = 0; i < input.length; i++) {
        if (counterInput[i]) {
          counterInput[i].addEventListener('input', function () {
            counterInput[i].value = counterInput[i].value.replace(/-?(\d+|\d+.\d+|.)([eE][-+])?[^\d]/g, '');
          });
        }
      }
});
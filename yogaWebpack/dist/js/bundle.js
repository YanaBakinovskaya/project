/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
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

      for (let i = 0; i < counterInput.length; i++) {
        if (counterInput[i]) {
          counterInput[i].addEventListener('input', function () {
            counterInput[i].value = counterInput[i].value.replace(/-?(\d+|\d+.\d+|.)([eE][-+])?[^\d]/g, '');
          });
        }
      }
}

module.exports = calc;


/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
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
}

module.exports = form;


/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
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
}

module.exports = modal;


/***/ }),

/***/ "./src/js/parts/scroll.js":
/*!********************************!*\
  !*** ./src/js/parts/scroll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scroll() {
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
}

module.exports = scroll;


/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
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
}

module.exports = slider;


/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

  module.exports = workWithTab;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
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
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//window.addEventListener('load');
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
      calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
      scroll = __webpack_require__(/*! ./parts/scroll.js */ "./src/js/parts/scroll.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js");

  tabs('.info-header', '.info-header-tab', '.info-tabcontent');
  calc();
  timer();
  scroll();
  modal();
  slider();
  form();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
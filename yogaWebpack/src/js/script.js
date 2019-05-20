//window.addEventListener('load');
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let timer = require('./parts/timer.js'),
      calc = require('./parts/calc.js'),
      scroll = require('./parts/scroll.js'),
      modal = require('./parts/modal.js'),
      slider = require('./parts/slider.js'),
      form = require('./parts/form.js'),
      tabs = require('./parts/tabs.js');

  tabs('.info-header', '.info-header-tab', '.info-tabcontent');
  calc();
  timer();
  scroll();
  modal();
  slider();
  form();
});
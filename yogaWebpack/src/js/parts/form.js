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

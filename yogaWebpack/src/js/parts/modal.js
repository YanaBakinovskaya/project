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

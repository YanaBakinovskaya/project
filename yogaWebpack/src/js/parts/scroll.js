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

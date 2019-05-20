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
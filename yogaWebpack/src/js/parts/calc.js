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

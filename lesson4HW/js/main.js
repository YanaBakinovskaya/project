'use strict';

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while(isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses : {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let article = prompt('Введите обязательную статью расходов в этом месяце?', ''),
          howCost = +prompt('Во сколько обойдется?', article);
      if ( (typeof(article)) === 'string' && (typeof(article)) != null && (typeof(howCost)) != null && article != '' && howCost != '' && article.length < 50) {
        appData.expenses[article] = howCost;
      } else {
        i = i - 1;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ваш бюджет в день cоставит: ' + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log('минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('высокий уровень достатка');
    } else {
      console.log('Произошла ошибка');
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt('Какая сумма накоплений?'),
          percent = +prompt('Под какой процент?');
      appData.monthIncome = save / 100 / 12 * percent;
      alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let i = 1; i < 4; i++) {
      let opt = prompt('Введите необязательную статью расходов в этом месяце?', '');
      appData.optionalExpenses[i] = opt;
    }
  },
  chooseIncome: function() {
    let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    while (typeof(items) !== 'string' || items == '' || items == null) {
      items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    }

    appData.income = items.split(', ');
    appData.income.push(prompt('Может, что-то еще?'));
    appData.income.sort();
    appData.income.forEach(function(item, i) {
      console.log('Способы доп. заработка: ' + (i + 1) + ':' + item);
    });
  }  
};

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key);
}

//console.log(appData);
